export default function Home() {
  return (
    <div>
      <header style={{background:'#F5F1E8',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788549601330</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_split" style={{color:'white',textDecoration:'none'}}>hero_split</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#about_split" style={{color:'white',textDecoration:'none'}}>about_split</a>
          <a href="#services_list" style={{color:'white',textDecoration:'none'}}>services_list</a>
        </nav>
      </header>
      <section style={{background:'#F5F1E8',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788549601330</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>A warm, editorial wellness website for Serenity Yoga Studios that drives class bookings, membership signups, and trust through instructor profiles, flexible scheduling, testimonials, and a welcoming studio story. The experience balances serene visual storytelling with practical tools for busy professionals to find and reserve the right class.</p>
        <a href="#contact" style={{background:'#6B9B8D',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F5F1E8'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F5F1E8'}}>hero_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_split offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F5F1E8'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="about_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F5F1E8'}}>about_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our about_split offerings.</p>
      </section>
      <section id="services_list" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F5F1E8'}}>services_list</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our services_list offerings.</p>
      </section>
      <footer style={{background:'#F5F1E8',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788549601330. All rights reserved.</p>
      </footer>
    </div>
  );
}