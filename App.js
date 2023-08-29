import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Logo from './assets/Dic_Img.png'
import Loading from './src/Loading';

export default function App() {
  const [show, setShow] = useState(false)
  const [text, setText] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const showSearchBar = () => {
    setShow(!show)
  }

  const fetchData = () => {
    if (text.trim().length >= 1) {
      setIsLoading(true)
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`

      fetch(url)
      .then(response => response.json())
      .then(data => setResults(JSON.stringify(data)))
      // .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      
      setIsLoading(false)
    }
  }


  return (
    <View className="flex-1 bg-white">
      <StatusBar style='light' />
      {show ? <View className='flex flex-row justify-between h-[16%] w-full bg-[#00227A] px-2 py-8 static'>
      <View className='h-20 mt-4 ml-4'>
        <Image source={Logo} style={{width: 200, height: 80}} />
      </View>

        <View className='absolute right-3 bottom-12'>
          <TouchableOpacity onPress={()=> showSearchBar()}>
            <Ionicons name="ios-search-sharp" size={30} color="white"/>
          </TouchableOpacity>
        </View> 
      </View> :
        <View className='flex flex-row justify-between h-[16%] w-full bg-[#00227A] px-2 py-12 items-center pl-4 '>
          <TouchableOpacity onPress={()=> showSearchBar()}>
            <Ionicons name='arrow-back-sharp' size={30} color='#ffffff90'/>
          </TouchableOpacity>
          <View className='flex flex-row gap-3 items-center ml-20'>
            <TextInput placeholder='Enter the word to search for ...' 
                        placeholderTextColor='gray' 
                        value={text}
                        onChangeText={text => setText(text)}
                        className='w-[80%] h-[45px] border-2 border-[#ffffff99] rounded-2xl text-white px-3 text-lg static' />
              <TouchableOpacity onPress={()=> fetchData()}>
                <Ionicons name='ios-search-sharp' size={30} color='#ffffff99' />
              </TouchableOpacity>
          </View>
        </View>
      } 
      <View className='mt-2 ml-2'>
        {isLoading ? <Loading /> : <Text className='text-lg'>{results}</Text> }
      </View>
    </View>
  );
}
