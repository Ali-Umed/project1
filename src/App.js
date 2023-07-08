import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

function App() {

   

  const [posts, setPosts] = useState([]);
  const [input1 , setInput1] =useState()
  const [input2,setInput2]=useState()
  const imagePatch = [input1,input2]
  const [ImageFind , setImagePatch] = useState(false)
  const [image,setImage]=useState([]);
  let array1=[0,1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 , 18 , 19 ]


  let category = ""; //  food sports  computer  places, animals feelings
  let search = "";
let patch=[1,1]
    useEffect(()=>{
      // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://pixabay.com/api/?key=38043057-35b08be7e29972d87691549ca&q=animal+flower&image_type=photo&category=animal"
        )
      ).json(data=> console.log(data));

      // set state when the data received
      setPosts(()=>data);
      console.log(data) 
    };
    shuffleArray(array1)
    dataFetch();
    },[]) ;
   
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      
  }  
    function findImage(imagePatch){
     let m=[1,3] , w=[1,1] ,  z=[1,2] ,   n=[1,4] , a=[2,2] , l=[2,3] , r=[2,4] , k=[3,3] , j=[3,4] , b=[4,4]
     const trick1 ={[m]:[5,13],[w]:[2,4],[z]:[3,6] ,[n]:[1,16] , [a]:[8,10] , [l]:[9,12] , [r]:[7,17], [k]:[10,15],[j]:[14,19],[b]:[18,20]}
     patch = trick1[imagePatch]
    
   console.log(patch)
   if(patch.length>0){
    setImage(patch)
    setImagePatch(true)
  }
     return trick1[imagePatch]
  }
 
  function handleSubmit(e){
    e.preventDefault();
   console.log('aa')
   console.log(input1 , input2)
    input1  && input2 && (
      
      findImage(imagePatch)
      )
    }

    function inputHandler1 (e){
    setInput1(Number(e.target.value))
    }
    function inputHandler2 (e){
      setInput2(Number(e.target.value))
    
    }

    if (posts.length <= 0 ) {
      return <h1>we dont have data</h1>;
    }

  return  (
    <div className="App">
      <Header/>
      <div>
        watch all image card  and remember twice of them
      </div>

      <div className="grid grid-cols-10 gap-2 ">
      {array1.map((e)=> <RenderImageCard  posts={posts} number={e} twice={true} />)}
      </div>

      <div className="flex flex-row mt-5 ">
      <div className=" grid grid-cols-5 gap-4">
      <RenderImageCard  posts={posts} number={array1[0]}/> 
      <RenderImageCard  posts={posts} number={array1[2]}/> 
      <RenderImageCard  posts={posts} number={array1[4]}/> 
      <RenderImageCard  posts={posts} number={array1[3]}/> 
      <RenderImageCard  posts={posts} number={array1[6]}/> 
      <RenderImageCard  posts={posts} number={array1[5]}/> 
      <RenderImageCard  posts={posts} number={array1[8]}/> 
      <RenderImageCard  posts={posts} number={array1[10]}/> 
      <RenderImageCard  posts={posts} number={array1[12]}/> 
      <RenderImageCard  posts={posts} number={array1[11]}/> 
      <RenderImageCard  posts={posts} number={array1[14]}/> 
      <RenderImageCard  posts={posts} number={array1[13]}/> 
      <RenderImageCard  posts={posts} number={array1[7]}/> 
      <RenderImageCard  posts={posts} number={array1[16]}/> 
      <RenderImageCard  posts={posts} number={array1[15]}/> 
      <RenderImageCard  posts={posts} number={array1[1]}/> 
      <RenderImageCard  posts={posts} number={array1[9]}/> 
      <RenderImageCard  posts={posts} number={array1[18]}/> 
      <RenderImageCard  posts={posts} number={array1[17]}/> 
      <RenderImageCard  posts={posts} number={array1[19]}/> 

      {/*{Array.from({ length: 20 }, (_, i) => (
        <RenderImageCard key={i} posts={posts} number={i}/> 
      ))}*/}
      </div>
     
<Form handleSubmit={handleSubmit} setInput1={setInput1} setInput2={setInput2} input1={input1} input2={input2} inputHandler1={inputHandler1} inputHandler2={inputHandler2}/>
      </div>

  {ImageFind &&  <div className=" grid grid-cols-2 gap-4">
        <RenderImageCard  posts={posts} number={image[0]-1}/> 
        <RenderImageCard  posts={posts} number={image[1]-1}/> 
      </div>}
     
    </div>
  );
}

function Header() {
  return <header className="App-header  ">
    <h1 className="text-3xl font-bold text-blue-500   underline">
      i can find your image by guess in the first time
    </h1>
  </header>;
}

function Form({handleSubmit ,  input1 , input2 , inputHandler1, inputHandler2}) {
  return <form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> number row of your image 1</label>
        <input  value={input1} onChange={inputHandler1} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> number row of your image 2</label>
        <input value={input2} onChange={inputHandler2} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
      </div>
    </div>

    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Submit</button>
  </form>;
}

function RenderImageCard({posts , number , twice}){
  const padding = number%2 !== 0 ? 0  : 10
  return  (
      <div className= {`rounded overflow-hidden shadow-lg ${twice && `ml-${padding}` }  `} >
<img className=" w-36 h-36" src={posts.hits[number].webformatURL} alt="Sunset in the mountains"/>
    </div>
  );
}
export default App;
