/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import * as functions from "firebase-functions"
import bodyParser from "body-parser";
import express from 'express';
import Stripe from "stripe";


const stripePublishableKey = 'pk_test_51P925FSEqlBvyOuQFj8fmZmfaRgYWj0IU9j64cvjw4bDSlvwsTvVM9GwN6KBfynHx8zHeFNjKb5YgUkgwHMfhrpx00LCZYNg72';
const stripeSecretKey = 'sk_test_51P925FSEqlBvyOuQ7NLfqcmFuVNr7cTx15211b1teejza3faCCpkuluosMkI7l3UsfyGAsk3SJTIkaMJOvRbBT9y00JMzYvstB';


const app = express();

app.use((req, res,next) => {
    bodyParser.json()(req,res,next)
})

app.post('/create-payment-intent', async (req, res) => {
    const {email, currency, amount} = req.body;
    const stripe = new Stripe(stripeSecretKey, {
        apiVersion: '2020-08-27'
    })
    const customer = await stripe.customers.create({email})
    console.log(req.body);
    const params = {
        amount: parseInt(amount),
        currency,
        customer: customer.id,
        payment_method_options: {
            card: {
                request_three_d_secure: 'automatic'
            }
        },
        payment_method_types: []
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create(params);
        return res.send({
            clientSecret: paymentIntent.client_secret
        })
    }
    catch(error){
        console.log(error);
        return res.send({
            error: error.raw.message
        })
    }
})

export const stripePayment = functions.https.onRequest(app);