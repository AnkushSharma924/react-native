import React, { useState } from "react";
import {View,StyleSheet,Text} from 'react-native';

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength : Yup.number()
    .min(4, 'Should be Min of 4 Characters')
    .max(16, 'Should be Max of 16 Characters')
    .required('Length is Required')
})

function Passwordgenerator(){
    const[password, setpassword] =useState('')
    const[isPassGenerated, setisPassGenerated] =useState(false)
    
     const [lowerCase, setLowerCase] = useState(true)
     const [upperCase, setupperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString = (passwordLength) =>{
        let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';
    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }
    const passwordResult = createPassword(characterList, passwordLength )
    setpassword(passwordResult)
    setisPassGenerated(true)
    
    }

    const createPassword = (characters, passwordLength) =>{
        let result = ''
        for (let index = 0; index <passwordLength ; index++) {
            const characterIndex = Math.round(Math.random()*characters.Length)
            result += characters.charAt(characterIndex)
        }
        return result
    }

    const resetPasswordState = () => {
    setpassword('')
    setisPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)

    }

      return(
        <View>
        <Text></Text>
         </View> 
      );
};
export default Passwordgenerator;

const styles =StyleSheet.create({

})