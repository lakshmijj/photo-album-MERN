import React from 'react';
import { GalleryProps, Photo } from '../tools/Data.model';

function Gallery({showGallery, setSelectedContent, collections}: GalleryProps) {
  console.log(collections)
  return (
   
    <div className={`flex flex-row flex-wrap mt-5 ${(showGallery) ?  'block' : 'hidden'} ml-4`}>
    {      
      collections?.map((collection: Photo, i: number) => {        
        return (        
            <div className=""><a href="#">
              <img className='rounded-md m-1 w-[75px] h-[56px] opacity-70 hover:opacity-100' src={`/images/${collection.source}`} alt={collection.title} 
              onClick={() => setSelectedContent(i)}/></a>
            </div>       
          
        )
     })
    }    
    </div> 
  );
}

export default Gallery;
