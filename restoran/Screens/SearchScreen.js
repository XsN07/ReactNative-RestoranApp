import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';



export default function SearchScreen() {
    const [searchApi,results,errorMessage]= useResults();

    const [term, setTerm] = useState('');
    console.log(results);

    const filterResultByPrice=(price)=>{
           return results.filter((results)=>{
            return results.price===price;
           })
    }
  return (
    <View>
      <SearchBar  
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={()=> searchApi (term)}
      />
    {errorMessage ? (
  <Text>{errorMessage}</Text>
) : (
  <>
    {results.length === 0 ? (
      <></>
    ) : (
      <>
        <ResultList title='Ucuz Restoranlar' results={filterResultByPrice('₺')} />
        <ResultList title='Uygun Restoranlar' results={filterResultByPrice('₺₺')} />
        <ResultList title='Pahalı Restoranlar' results={filterResultByPrice('₺₺₺')} />
      </>
    )}
  </>
)}
     
     
    </View>
  )
}

const styles = StyleSheet.create({})