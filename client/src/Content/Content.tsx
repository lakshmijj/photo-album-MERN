import React from 'react';
import { Comment, ContentProps, Photo } from '../tools/Data.model';

function Content({selectedContent, collections} : ContentProps) {
    //let content: Photo = (collections && collections?.length > 0) ? collections[selectedContent] : {};   
    let content: Photo = collections[selectedContent];   
    console.log("content",content);
    console.log("source", content.source);
  return (    
    <>
    {(content.source) ? 
     <div className="font-default text-default mt-2 ml-4">
          <img alt="Pic" className="rounded-md mb-2.5" src={`/images/${content.source}`} loading="eager"/>
          <div className="text-xl">{content.title}</div>
          <div className="mt-2.5 font-default text-sm">{content.caption}</div>
          
          {content?.comments?.map((comment: Comment) => {
            return (
                <div className="text-xs p-2.5">
                    <div className="border-l-[5px] border-solid border-[#dad9d9] p-2.5"> 
                        Submitted by: {comment.author}<br /> 
                        {comment.comment}
                    </div>
                </div>
            )    
          })
          }
         
      </div> 
      :
      <div className="">
          There are no photos to display at this time.
      </div>
      }
      </>
  );
}

export default Content;
