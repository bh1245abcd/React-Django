const Contact = () => {
  return (
    <>

      <div style={{margin:"60px 0px"}}>
     <h1 style={{textAlign:'center',fontSize:"32px", fontWeight:"bold"}}>Contact Us</h1>
     <div className="flex justify-center mt-[16px] gap-[32px] mb-[16px]" >
      
      <div className="b1">
        <input style={{border:"2px solid grey",padding:"6px 2px 6px 7px",borderRadius:"10px",width:"420px",marginBottom:"16px"}} type="text" name="" id="" placeholder="Enter Fullname"/><br />
        <input style={{border:"2px solid grey",padding:"6px 2px 6px 7px",borderRadius:"10px",width:"420px",marginBottom:"16px"}} type="email" name="" id="" placeholder="Enter Email"/><br />
        <input style={{border:"2px solid grey",padding:"6px 2px 6px 7px",borderRadius:"10px",width:"420px",marginBottom:"16px"}} type="tel" name="" id="" placeholder="Enter Phonenumber"/><br />
        <textarea style={{border:"2px solid grey",padding:"6px 2px 6px 7px",height:"150px",borderRadius:"10px",width:"420px",marginBottom:"16px"}} name="" id="" placeholder="Enter Message">
        </textarea>
      </div>

      <div className="b2">
         <iframe
            title="Google Map"
            className="w-[620px] h-[320px] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001222588953!2d-104.99025128464887!3d39.73923597944888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d79a6f4a71%3A0xbeb03d3a3c3a1bc4!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1612345678910"
            allowFullScreen=""
            loading="lazy"
         ></iframe>
      </div>

     </div>
     </div>
    </>
  )
}

export default Contact