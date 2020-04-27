import React,{component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Avatar } from 'react-native-elements';

export default class WelcomeScreen extends component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            isModalVisible: 'false',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            confirmPassword: '',
        }
    }
    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            return Alert.alert('Succussful LogIn')
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }
    createUser=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            return Alert.alert('Succussful SignUp')
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }
    showModal=()=>{
        return(
            <Modal animationType= "fade"
            transparent= {true}
            visibible ={this.state.isModalVisible}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{width: '100%'}}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text style={styles.modalTitle}>
                                Registration
                            </Text>
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"first name"}
                                maxLength= { 8 }
                                onChangeText={( text )=>{
                                    this.setState({
                                        firstName: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"last name"}
                                maxLength= { 8 }
                                onChangeText={( text )=>{
                                    this.setState({
                                        lastName: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"Conatct"}
                                maxLength= { 10 }
                                keyboardType={'numeric'}
                                onChangeText={( text )=>{
                                    this.setState({
                                        contact: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"Address"}
                                multiline= { true }
                                onChangeText={( text )=>{
                                    this.setState({
                                        address: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"Email"}
                                keyboardType= {'email-address'}
                                onChangeText={( text )=>{
                                    this.setState({
                                        emailId: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"Password"}
                                secureTextEntry= { true }
                                onChangeText={( text )=>{
                                    this.setState({
                                        password: text
                                    })
                                }}
                            />
                            <TextInput 
                                style={styles.fromTextInput}
                                placeholder= {"Confirm Password"}
                                secureTextEntry= { true }
                                onChangeText={( text )=>{
                                    this.setState({
                                        confirmPassword: text
                                    })
                                }}
                            />
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity style={styles.registerButton}
                                onpress= {()=>{
                                    this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)
                                }}>                                  
                                    <Text style={styles.registerButtonText}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity style={styles.cancelButton}
                                onpress= {()=>{
                                    this.setState({"isModalVisible": false})
                                }}>                                  
                                    <Text style={{color: '#ff5722'}}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style={ style.container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                </View>
                {
                    this.showModal()

                }
               <View>
                <Text style={styles.title}>
                    Book Santa
                </Text>
            
            </View>
            <View>
            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType= 'email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId: text
                })
            }}
        />
        <TextInput
        style={styles.loginBox}
            secureTextEntry= {true}
            placeholder="enter password"
            onChangeText={(text)=>{
            this.setState({
                password: text
            })
        }}
    />
    <TouchableOpacity style={[styles.button,{marginBottom: 20, marginTop: 20}]}
    onPress={()=>{
        this.userLogin(this.state.emailId, this.state.password)
    }}>
        <Text style={styles.buttonText}>
            Login
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button,{marginBottom: 20, marginTop: 20}]}
    onPress={()=>{
        this.setState({isModalVisible: true})
    }}>
        <Text style={styles.buttonText}>
            Sign Up
        </Text>
    </TouchableOpacity>
    </View>
    </View>
        );
    }
}

StyleSheet