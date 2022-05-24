import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Platform,
    FlatList
} from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greetings, setGretting] = useState('');

    function handleAddNewSkill(){
        setMySkills(oldState =>[ ... oldState, newSkill ]);
    }
    //funcão, dependencia
    useEffect(()=>{
        const currentHour = new Date().getHours();
        if(currentHour < 12){
            setGretting('Good morning');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon');
        }else{
            setGretting('Good night');
        }

    }, [])

    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>
            Welcome, Diney
        </Text>
        
        <Text style={styles.greetings}>
            {greetings}
        </Text>


        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />
    
        <Text style={[styles.title, { marginVertical: 50 }]}>
            MySkills
        </Text>


       
        
        <FlatList 
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <SkillCard skill={item}/>
            )}
        />

        
      </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title:{
        color:'#fff',
        fontSize: 23,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings:{
        color: '#FFF'
    }
  
    

})