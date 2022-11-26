import React from 'react';
import { CommentProps, Photos } from '../tools/Data.model';
import { getJSONData, sendJSONData } from '../tools/Toolkit';

function Comment({selectedContent, collections, setCollections, toggleComment, setToggleComment, setLoading, setReloadData} : CommentProps) {

    // URL to submit comments
    const SUBMIT_SCRIPT:string = 'http://localhost/post';

    // ---------------------------------------------- event handers
    const onSubmitResponse = () => {        
        //onresponse reset and hide the comments
        collapseComment();
        //reload data
        setReloadData(true);
    };

    const onError = (message:string) => console.log("*** Error has occured during ajax call: " + message);

    function collapseComment(){
        setAuthor('');
        setComment('');
        setToggleComment(!toggleComment);
    }

    //state variables for form -- useful for validation styles
    const [author, setAuthor] = React.useState<string>('');
    const [comment, setComment] = React.useState<string>('');

    function addComment(){
        let reqJSON = {
            "photoId": collections[selectedContent].id,
            "author": author,
            "comment": comment
        };
        //show loader
        setLoading(true);
        // send the JSON data to the Web API!
        sendJSONData(SUBMIT_SCRIPT, JSON.stringify(reqJSON), onSubmitResponse, onError);
    }
    

  return (
      <div className={`mt-5 ${(toggleComment) ?  'block' : 'hidden'} ml-4` }>
          <div className="mb-[3px] mt-2.5 text-base">Author:</div>
          <div>
              <input id="inputAuthor" 
                    className="rounded-md border-2 border-solid border-[#e6e6e6] shadow-sm shadow-[#e6e6e6] text-black bg-[#e6e6e6] py-1.5 px-3 max-w-xs max-h-[32px] focus:outline-none"
                    maxLength={50} type="text" 
                    value={author} onChange={(e:any) => setAuthor(e.target.value)} />
          </div>
          <div className="mb-[3px] mt-2.5 text-base">Comment (200 Characters):</div>
          <div>
              <textarea id="inputComments" 
              className="w-52 h-40 rounded-md border-2 border-solid border-[#e6e6e6] shadow-sm shadow-[#e6e6e6] text-black bg-[#e6e6e6] py-1.5 px-3 focus:outline-none" 
              maxLength={200} value={comment} onChange={(e:any) => setComment(e.target.value)}></textarea>
          </div>
          <div className="mt-2.5">
              <button className={`border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] ${(author && comment) ? 'bg-[#428bca] hover:bg-[#245682]' : 'bg-[#C0C0C0]'} text-[#fff] focus:outline-none`} onClick={addComment}>Ok</button>
              <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#C0C0C0] text-[#fff] focus:outline-none hover:bg-[#245682]" onClick={collapseComment}>Cancel</button>
          </div>
      </div>
  );
}

export default Comment;
