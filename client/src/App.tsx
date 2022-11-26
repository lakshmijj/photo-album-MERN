import React from 'react';
import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import Header from "./Header/Header";
import Comment from "./Comment/Comment";
import Content from "./Content/Content";
import Jump from "./Jump/Jump";
import Gallery from "./Gallery/Gallery";
import { Photo, Photos } from "./tools/Data.model";
import { getJSONData } from "./tools/Toolkit";

function App() {


    
// request url of Web API to retrieve JSON
const RETRIEVE_SCRIPT:string = 'http://localhost/get';

// URL to submit comments
const SUBMIT_SCRIPT:string = 'https:/localhost/albumAddComment.php';


// ---------------------------------------------- event handers
const onResponse = (result:Photos) => {
    // data received from Web API
    console.table(result);
    galleryCollection.current = result.photos;
    console.log('lj',galleryCollection.current);
    // store received JSON array in state variable
    setCollections(galleryCollection.current);
    console.log("collections", collections);
    //setSelectedContent(0);
    setLoading(false);
  };

  const onError = (message:string) => console.log("*** Error has occured during AJAX data transmission: " + message);

  // ---------------------------------------------- state variables
  const [loading, setLoading] = React.useState<boolean>(true);
  const [collections, setCollections] = React.useState<Photo[]>([]);
  const [reloadData, setReloadData] = React.useState<boolean>(false);
  const [selectedContent, setSelectedContent] = React.useState<number>(0);
  const [enablePrev, setEnablePrev] = React.useState<boolean>(false);
  const [enableNext, setEnableNext] = React.useState<boolean>(true);
  const [toggleComment, setToggleComment] = React.useState<boolean>(false);
  const [showGallery, setShowGallery] = React.useState<boolean>(false);

  
  const galleryCollection = React.useRef<Photo[]>([]);
  // -----------------------------------------------------------------

  // ---------------------------------------------- lifecycle hooks
  React.useEffect(() => {
    // component mounted - loading JSON data when root component mounts
    getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
  }, []);
  
 if(reloadData){
  getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
 }
 
  return (  
    <>       
    <LoadingOverlay bgColor="#FFFFFF" spinnerColor="#fb3" enabled={loading} />
    <Header />
    { 
      (collections.length > 0) ?    
      <>
      <Jump selectedContent={selectedContent} collections={collections} setSelectedContent={setSelectedContent} enablePrev={enablePrev} setEnablePrev={setEnablePrev} enableNext={enableNext} setEnableNext={setEnableNext} setToggleComment={setToggleComment} setShowGallery={setShowGallery} toggleComment={toggleComment} showGallery={showGallery}/>
      <Gallery showGallery={showGallery} setSelectedContent={setSelectedContent} collections={collections}/>
      <Comment selectedContent={selectedContent} collections={collections} setCollections={setCollections} toggleComment={toggleComment} setToggleComment={setToggleComment} setLoading={setLoading} setReloadData={setReloadData}/>
      <Content selectedContent={selectedContent} collections={collections}/>
      </>
     : 
      <div className="">
          There are no photos to display at this time.
      </div>
    }
    </>
     
    
  );

}

export default App;
