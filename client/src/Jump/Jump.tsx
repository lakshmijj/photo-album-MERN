import React from 'react';
import { JumpProps} from '../tools/Data.model';

function Jump({collections, selectedContent, setSelectedContent, enablePrev, setEnablePrev, enableNext, setEnableNext, toggleComment, setToggleComment, showGallery, setShowGallery}: JumpProps) {
    
     // ---------------------------------------------- event handlers
    const onNextClick = (e:any) => {
        // update state variable which forces a re-render of this component
        if(selectedContent < collections.length - 1){
            setSelectedContent(selectedContent+1);
        }
    }

    const onPrevClick = (e:any) => {
        // update state variable which forces a re-render of this component
        if(selectedContent !== 0){
            setSelectedContent(selectedContent- 1);
        }        
    }

    return (
    <div className="flex flex-row flex-wrap pt-2.5 ml-4">
          <button className={`border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] ${(selectedContent === 0) ? 'bg-[#ccc] text-[#666]' : 'bg-[#428bca] text-[#fff]'}  `} id="btnPrevious" onClick={onPrevClick}>Previous</button>
          <button className={`border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] ${(selectedContent === collections.length -1) ? 'bg-[#ccc] text-[#666]' : 'bg-[#428bca] text-[#fff]'}`} id="btnNext" onClick={onNextClick}>Next</button>
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#fb3] text-[#fff]" onClick={() => setShowGallery(!showGallery)}>Jump</button>
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#fb3] text-[#fff]" onClick={() => setToggleComment(!toggleComment)}>Comment</button>
          <div className="ml-2.5 self-center text-xs" id="paginator">Photo {selectedContent + 1} of {collections?.length}</div>
    </div>  
  );
}

export default Jump;
