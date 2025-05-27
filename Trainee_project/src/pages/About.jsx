import cover from '../assets/aboutcover.jpg'
import first from '../assets/aboutcover1.jpg'
import second  from '../assets/aboutcover2.jpg'
import three from '../assets/aboutcover3.jpg'


const About = () => {
  return (
   <>
   <div>
    <img src={cover} alt="" width="100%"  height="128px" style={{marginBottom:"32px"}}/>
   </div>
  
    <h4 className='ml-[280px] text-stone-600 text-[36px] font-bold'>About Us</h4>

    <p className='text-justify w-[1100px] ml-[280px]'>Welcome to Arittrainnes, your go-to destination for stylish,
    comfortable, and affordable fashion.
    Founded with a passion for creativity and self-expression, we believe that clothing is more than just fabric — 
    it's a way to tell your story, show your personality, and feel confident every day.
    At Arittrainnes, we curate a wide range of apparel that blends the latest trends with timeless designs. 
    From casual everyday wear to bold statement pieces, our collections are thoughtfully designed to fit every mood, 
    occasion, and lifestyle. Whether you’re dressing up for an event or keeping it cozy at home, we’ve got something that 
    fits just right.Quality is at the heart of everything we do. We partner with trusted manufacturers and use premium 
    fabrics to ensure every piece meets our high standards for comfort, durability, and style. Our goal is to make fashion 
    accessible to everyone without compromising on quality.</p>

    <div className="flex mt-[32px] gap-[16px]">
       <div className="o">
         <img src={first} alt="" style={{width:"720px"}}/>
       </div>
       <div className='w-[720px] '>
         <h4 className='text-stone-600 text-[36px] font-bold'>Our Mission</h4>
         <p className='text-justify'>At Arittrainnes, our mission is simple: to empower individuals to express themselves through fashion that is 
          stylish, affordable, and accessible to everyone. We believe clothing is not just about covering your body — it's 
          a powerful way to express personality, mood, culture, and confidence. Our goal is to help every customer feel seen, valued, and stylish — no matter who they are or where they come from.
          We are passionate about making fashion inclusive. That means designing clothing for all shapes, sizes, and 
          backgrounds, ensuring that everyone can find pieces that make them feel confident and comfortable. From trendy 
          everyday outfits to unique statement pieces, we are committed to offering collections that are diverse, modern, 
          and ever-evolving.</p>
       </div>
    </div>


     <div className="flex gap-[16px]">
       <div className="w-[720px]">
          <h4 className='text-stone-600 text-[36px] font-bold'>Our Mission</h4>
          <p className='text-justify'>At Arittrainnes, our mission is simple: to empower individuals to express themselves through fashion that is 
          stylish, affordable, and accessible to everyone. We believe clothing is not just about covering your body — it's 
          a powerful way to express personality, mood, culture, and confidence. Our goal is to help every customer feel seen, valued, and stylish — no matter who they are or where they come from.
          We are passionate about making fashion inclusive. That means designing clothing for all shapes, sizes, and 
          backgrounds, ensuring that everyone can find pieces that make them feel confident and comfortable. From trendy 
          everyday outfits to unique statement pieces, we are committed to offering collections that are diverse, modern, 
          and ever-evolving.</p>
       </div>
       <div className=''>
         <img src={second} alt="" style={{width:"720px"}}/>
       </div>
    </div>

    <div className="flex gap-[16px]">
       <div className="o">
         <img src={three} alt="" style={{width:"720px",height:"420px"}}/>
       </div>
       <div className='w-[720px]'>
         <h4 className='text-stone-600 text-[36pwx] font-bold'>Our Products</h4>
         <p className='text-justify'>At  Arittrainnes, our products are more than just clothing — they are a reflection of 
         comfort, confidence, and everyday style. We are proud to offer a wide range of apparel that blends fashion-forward 
         design with functionality, so you never have to choose between looking good and feeling great.Each product we
         create is carefully designed to meet the diverse needs of modern individuals. Whether you're heading to work,
         going out with friends, relaxing at home, or attending a special occasion, our clothing is made to fit your 
         lifestyle. From classic basics to bold, on-trend pieces, we offer styles that allow you to express yourself 
         freely.</p>
       </div>
    </div>

    </>
  )
}

export default About;
