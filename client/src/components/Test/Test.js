
// import React, { Component } from 'react'
// import "./index.css"
// import ImageUploader from 'react-images-upload';

// class Test extends React.Component {
 
//     constructor(props) {
//         super(props);
//          this.state = { pictures: [],
//         upload: [] };

//          this.onDrop = this.onDrop.bind(this);
//     }
 
//     onDrop(pictureFiles, pictureDataURLs) {
//       let upload = this.state.pictures.concat(pictureFiles)
//       //  let file = e.dataTransfer.picture
//         // let url = URL.createObjectURL(picture)
//         this.setState({
//             pictures: this.state.pictures.concat(pictureFiles),
//             upload:pictureDataURLs
//         });
//         // let file = e.dataTransfer.pictures[0]
//         // let url = URL.createObjectURL(pictures)
//         console.log(pictureDataURLs)
//     }
 
//     render() {
//         return (
//           <div>
//             <ImageUploader
//                 withIcon={true}
//                 withPreview={true}
//                 singleImage={true}
//                 buttonText='Choose images'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//             <div class ="uploadPictureContainer">
//             <img src= {this.state.upload} className ="uploadPicture" alt="user-img"/> 
//             </div>
//             </div>
//         );
//     }
// }

// export default Test;