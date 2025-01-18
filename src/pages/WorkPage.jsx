import juanPic from '../assets/juan-img.jpg'

export default function WorkPage() {
  return(
    <div id="work-page-container" className="flex flex-col items-center justify-center">
      {/* Introduction card */}
      <div className="card card-side bg-primary mt-32 w-3/4 text-white shadow-secondary shadow-xl">
        <figure>
          <img
          className='h-96'
            src={juanPic}
            alt="Juan's Cover Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Military Veteran turned Full-Stack Software Engineer</h2>
          <p className='w-[550px]'>
            with over 5 years of operations, logistics and project management experience in 
            the military across maintenance and operations. Tested expertise in quality assurance, 
            technical leadership and customer relations. Seeking a developer position in a 
            challenging field that has opportunities for growth and development.
            <br/>
            <br/>
            <strong>Secret Clearance </strong>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Let's Work Together!</button>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className='text-6xl mt-32' >Full-Stack Projects</div>
      {/* Projects showcase */}
        {/* Project 1 */}
      <div className="card lg:card-side bg-primary shadow-secondary shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        {/* Project 2 */}
      <div className="card lg:card-side mt-32 bg-primary shadow-secondary shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        {/* Project 3 */}
      <div className="card lg:card-side my-32 bg-primary shadow-secondary shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  )
}