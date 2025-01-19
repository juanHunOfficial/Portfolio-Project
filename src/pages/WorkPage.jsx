import VideoBackground from '../components/VideoBackground'

export default function WorkPage() {
  
  return(
    <div id="work-page-container" className="flex flex-col items-center justify-center">
      <VideoBackground />
      {/* Introduction card */}
      <div id="#scroll-div" className="card card-side relative z-10 glass bg-primary text-primary-content mt-48 w-3/4">
        <figure className='h-[320px] w-[300px]'>
          <svg 
            viewBox="0 0 24 24">
              <path 
                d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 
                  .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236
                  3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 
                  0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 
                  1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 
                  1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 
                  0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 
                  1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"
              />
          </svg>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Military Veteran turned Full-Stack Software Engineer</h2>
          <p className='w-[550px] '>
            with over 5 years of operations, logistics and project management experience in 
            the military across maintenance and operations. Tested expertise in quality assurance, 
            technical leadership and customer relations. Seeking a developer position in a 
            challenging field that has opportunities for growth and development.
            <br/>
            <br/>
            <strong>Secret Clearance </strong>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary text-secondary-content">Let's Work Together!</button>
          </div>
        </div>
      </div>
      {/* Title */}
      <h2 id="#scroll-div"  className='text-6xl mt-64' >Full-Stack Projects</h2>
      {/* Projects showcase */}
        {/* Project 1 */}
      <div id="#scroll-div" className="card mt-32 lg:card-side bg-primary">
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
      <div className="divider mt-32 divider-primary"></div>
        {/* Project 2 */}
      <div id="#scroll-div" className="card lg:card-side mt-32 bg-primary">
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
      <div className="divider mt-32 divider-primary"></div>
        {/* Project 3 */}
      <div id="#scroll-div" className="card lg:card-side my-32 bg-primary">
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