import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  themes:{
    colors:{
        primary: '#294380',
        secondary: '#f1f6ce',
        tertiary: '#69d2cd',
        quaternary: '#0d0f36',
        titles:{
            title: '#f1f6ce',
            subtitle: '#69d2cd',
            text: '#0d0f36',
        },
    },
  } ,
  input:{  height: 40,
        borderColor: '#69d2cd',
        borderWidth: 2,
        borderRadius: 10,
        margin: 12,
        padding: 1,
        paddingLeft: 10,
        marginBottom: 20,
        width: 300,
        textAlign: 'center',
        fontSize: 15,
        alignItems: 'center', 
        color:'#0d0f36',
        backgroundColor: '#ffff',}
  ,
  container: {
    flex: 1,
    backgroundColor: '#294380',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#f1f6ce',
  }
});

export default styles;