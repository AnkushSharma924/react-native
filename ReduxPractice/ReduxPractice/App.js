import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [postTitle, setpostTitle] = useState('');
  const [postBody, setpostBody] = useState('');
  const [isPosting, setisPosting] = useState('');
  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await response.json();
    console.log(data);
    setPostList(data);
    setisLoading(false);
  };

  const addPost = async () => {
    setisPosting(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });
    const newPost = await response.json();
    setPostList([newPost, ...postList]);
    setpostTitle('');
    setpostBody('');
    setisPosting(false);
  };

  const handleRefresh = () => {
    setisRefreshing(true);
    fetchData(20);
    setisRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'0000ff'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Post Title"
        value={postTitle}
        onChangeText={setpostTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Post Body"
        value={postBody}
        onChangeText={setpostBody}
      />
      <Button
        title={isPosting ? 'Adding...' : 'Add Post'}
        onPress={addPost}
        disabled={isPosting}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={
            <Text style={styles.headersText}>Post List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  body: {
    fontSize: 24,
    color: '#666666',
  },
  headersText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
    color: 'black',
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
    color: 'black',
  },
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
