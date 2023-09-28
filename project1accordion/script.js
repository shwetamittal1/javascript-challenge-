const faqData = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
      id: 2,
      question: "What do we do?",
      answer:
        "Building learning communities with Our Affordable & Competent Courses",
    },
    {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!",
    },
  ];
  
  
  const faqs = faqData;
  const paragraph=document.getElementById("p1");
  const button1=document.querySelector(".show_btn");
 const button2=document.querySelector(".show_btn1");
const pTag=document.querySelector('p');
  const button3=document.querySelector(".show_btn2");

 
  function showFaq(id, faqs){

 if(id==="btn1"){
    clearptag();
    console.log( "first element",faqs[0].answer);
 
   
    const text=document.createTextNode(faqs[0].answer);
    paragraph.appendChild(text);

 }
 else if(id==="btn2"){
    clearptag();
   
    console.log( "second element",faqs[1]);
    const text=document.createTextNode(faqs[1].answer);
    paragraph.appendChild(text);
}  
else if(id==="btn3"){
    clearptag();
    console.log( "third element",faqs[2]);
    const text=document.createTextNode(faqs[2].answer);
    paragraph.appendChild(text);
   
}  

  }

  button1.addEventListener("click",()=>{
  
    var id=document.getElementById("btn1").id;
    showFaq(id,faqs);
    console.log(id);
})
  
    
      
 
 button2.addEventListener("click",()=>{
//clearptag();
    var id=document.getElementById("btn2").id;
    showFaq(id,faqs);
    console.log(id);
})

     
  
  button3.addEventListener("click",()=>{
    var id=document.getElementById("btn3").id;
    showFaq(id,faqs);
    console.log(id);
      
  })
  
  

  
  
  function clearptag() {
    console.log("inside ptag");
    
    document.getElementById("p1").innerText="";

   //console.log("blank",blank);

  }
  
  
  
  
  