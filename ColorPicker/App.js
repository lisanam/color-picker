/*
var FileUploadDemo = React.createClass({
  componentDidMount: function() {
    var obj = {
        uploadUrl: 'http://127.0.0.1:3000',
        method: 'POST', // default 'POST',support 'POST' and 'PUT'
        headers: {
          'Accept': 'application/json',
        },
        fields: {
            'hello': 'world',
        },
        files: [
          {
            name: 'one', // optional, if none then `filename` is used instead
            filename: 'one.w4a', // require, file name
            filepath: '/xxx/one.w4a', // require, file absoluete path
            filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
          },
        ]
    };
    FileUpload.upload(obj, function(err, result) {
      console.log('upload:', err, result);
    })
  },
*/

        // RNFetchBlob.fs.readStream(
        //     // encoding, should be one of `base64`, `utf8`, `ascii` 
        //     'base64',
        //     // file path 
        //     response.uri.slice(8, response.uri.length),
        //     // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data) 
        //     // when reading file in BASE64 encoding, buffer size must be multiples of 3. 
        //     4095)
        // .then((ifstream) => {
        //     ifstream.open()
        //     ifstream.onData((chunk) => {
        //       // when encoding is `ascii`, chunk will be an array contains numbers 
        //       // otherwise it will be a string 
        //       data += chunk
        //     })
        //     ifstream.onError((err) => {
        //       console.log('oops', err)
        //     })
        //     ifstream.onEnd(() => {  
        //       fetch('https://apicloud-colortag.p.mashape.com/tag-file.json', {
        //         method: 'POST',
        //         headers: {
        //           'X-Mashape-Key': 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7'
        //         },
        //         body: data
        //       })
        //       .then((response) => console.log('response', response))
        //       .catch((error) => console.log('error', error));
        //     })
        // })

        // RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
        //   // dropbox upload headers 
        //   Authorization : "Bearer dd4EBCL34JkAAAAAAAAXuz5M3ZLC8wwYhZa19mstBDTCb_isiifKUPgmC2X34KZ8",
        //   'Dropbox-API-Arg': JSON.stringify({
        //     path : response.uri.slice(7, response.uri.length),
        //     mode : 'add',
        //     autorename : true,
        //     mute : false
        //   }),
        //   'Content-Type' : 'application/octet-stream',
        //   // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`. 
        //   // Or simply wrap the file path with RNFetchBlob.wrap(). 
        // }, RNFetchBlob.wrap(response.uri))
        // .then((res) => {
        //   console.log(res.text());
        // })
        // .catch((err) => {
        //   // error handling .. 
        // });

        // var formdata = new FormData();
        // formdata.append("image", response.uri);

        //console.log('formdata', formdata);
        //console.log('response.uri', response.uri);

        // var xhr = new XMLHttpRequest();

        // xhr.open('POST', 'https://apicloud-colortag.p.mashape.com/tag-file.json');
        
        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState == XMLHttpRequest.DONE) {
        //     console.log('xhr.responseText', xhr.responseText);
        //   }
        // };
        
        // xhr.setRequestHeader('X-Mashape-Key', 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7');
        // xhr.send(formdata);

//////////////////////////////////////////
        // fetch('https://apicloud-colortag.p.mashape.com/tag-url.json?palette=simple&sort=relevance&url=http://weknowyourdreams.com/images/rainbow/rainbow-02.jpg',{
        // method: 'GET',
        // headers: {
        //   'X-Mashape-Key': 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7'
        // }
        // }).then(response => {
        //   console.log('response', response);
        //   response.json()
        //     .then((parse) => {
        //       console.log('parse', parse);
        //       var palette = {
        //         color1: {hex: parse.tags[0].color, name: parse.tags[0].label}, 
        //         color2: {hex: parse.tags[1].color, name: parse.tags[1].label},
        //         color3: {hex: parse.tags[2].color, name: parse.tags[2].label},
        //         color4: {hex: parse.tags[3].color, name: parse.tags[3].label},
        //         color5: {hex: parse.tags[4].color, name: parse.tags[4].label}
        //       };
        //       var name = 'From Photo App';

        //       console.log('data', {name: name, palette: palette});
              
        //       fetch('http://138.197.5.105:3000/api/colors', {
        //         method: 'POST',
        //         headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json'

        //         },
        //         body: JSON.stringify({name: name, palette: palette})
        //       }).then((success) => {
        //         console.log('success', success);
        //       }).catch((error) => {
        //         console.log('error', error);
        //       });
              
              
              
        //     });
        // }).catch(err => {
        // console.log('err', err)
        // })  
        // // var formdata = new FormData();
       
 // formdata.append("image",response.uri);
        // fetch('https://apicloud-colortag.p.mashape.com/tag-file.json',{
        // method: 'post',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'X-Mashape-Key': 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7'
        // },
        // body: JSON.stringify(formdata)
        // }).then(response => {
        // console.log(response);
        // that.setState({
        //   hasData: true
        // })
        // }).catch(err => {
        // console.log(err)
        // })  


        // fetch('https://apicloud-colortag.p.mashape.com/tag-file.json', {
        //         method: 'POST',
        //         headers: {
        //           'X-Mashape-Key': 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7'
        //         },
        //         body: {image: response.data}
        //       })
        //       .then((response) => console.log('response', response))
        //       .catch((error) => console.log('error', error));



import React from 'react';
import {
  PixelRatio,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  NativeModules,
  Button
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';

import RNFetchBlob from 'react-native-fetch-blob';
var FileUpload = require('NativeModules').FileUpload;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSource: null,
      colorFamily: null,
    };
  }


  selectPhoto() {
    var options = {
      takePhotoButtonTitle: 'Capture Image',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        path: 'Photos'
      }
    };

    ImagePicker.showImagePicker(options, (response)=> {

      console.log(response);

      if (response.didCancel) {
        console.log('Cancel');
      }
      else if (response.error) {
        console.log('Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        source = {uri: response.uri, isStatic: true};

        this.setState({
          photoSource: source
        });

        var photo = {
          image: response.uri,
        };
        

        Actions.editor({photoSource:source});


    //   var obj = {
    //     uploadUrl: 'https://apicloud-colortag.p.mashape.com/tag-file.json',
    //     method: 'POST', // default 'POST',support 'POST' and 'PUT' 
    //     headers: {
    //       'Accept': 'application/json',
    //       'X-Mashape-Key': 'TV1rwHm368mshLO2ONI1Dp4owetOp18tBYMjsnHpj9IJjkOrZ7',
    //     },
    //     fields: {
    //         'temp': 'temp',
    //     },
    //     files: [
    //       {
    //         filename: response.uri.slice(36, response.uri.length), // require, file name 
    //         filepath: response.uri.slice(8, response.uri.length), // require, file absoluete path 
    //         filetype: '', // options, if none, will get mimetype from `filepath` extension 
    //       },
    //     ]
    // };
    

    
    // FileUpload.upload(obj, function(err, result) {
    //   console.log('upload:', result.data);

    //   var colors = JSON.parse(result.data);
    //   console.log(colors);
    //   var palette = {
    //             color1: {hex: colors.tags[0].color, name: colors.tags[0].label}, 
    //             color2: {hex: colors.tags[1].color, name: colors.tags[1].label},
    //             color3: {hex: colors.tags[2].color, name: colors.tags[2].label},
    //             color4: {hex: colors.tags[3].color, name: colors.tags[3].label},
    //             color5: {hex: colors.tags[4].color, name: colors.tags[4].label}
    //           };
    //           var name = 'From Photo App';

    //           console.log('data', {name: name, palette: palette});
              
    //           fetch('http://138.197.5.105:3000/api/colors', {
    //             method: 'POST',
    //             headers: {
    //               'Accept': 'application/json',
    //               'Content-Type': 'application/json'

    //             },
    //             body: JSON.stringify({name: name, palette: palette})
    //           }).then((success) => {
    //             console.log('success', success);
    //           }).catch((error) => {
    //             console.log('error', error);
    //           });



    // })












      }
    });
  }

  navEditor () {
    Actions.editor({text:'from start'});
  }
          // <TouchableNativeFeedback onPress={this.selectPhoto.bind(this)}>
          //   <View style={[styles.photoSelector, styles.photoSelectorContainer, {marginBottom: 20}]}>
          //   { this.state.photoSource === null ? <Text >Select a Photo</Text> :
          //     <Image style={styles.photoSelector} source={this.state.photoSource} />
          //   }
          //   </View>
          // </TouchableNativeFeedback>
  

  render() {
    
      return (
        <View style={styles.container}>
          
          <Image source={require('./icon.png')} style = {{marginTop:40}} />

          <View style = {styles.photoSelector}>
          <Button 
            onPress={this.navEditor.bind(this)}
            title ='Editor'
            color = "#841584"
            style={{width: 400, height: 60}}
          />

          <Button 
            onPress = {this.selectPhoto.bind(this)}
            title ='Capture or Upload Image'
            color = "#841584"
          />
          </View>

        </View>
      );
    
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  photoSelectorContainer: {
    borderColor: '#5D6D7E',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoSelector: {
    justifyContent: 'space-around',
    borderRadius: 150,
    width: 300,
    height: 150
  },

});