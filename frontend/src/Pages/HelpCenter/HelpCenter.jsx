import React from 'react'
import './HelpCenter.css'

function HelpCenter() {
  return (
    <div className='container'>


	
			<div className="accordion">
				<div className="accordion-item">
					<button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Temel Bilgiler Hakkında</span><span className="icon" aria-hidden="true"></span></button>
					<div class="accordion-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
        
				<div className="accordion-item">
					<button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Temel Problemler Hakkında</span><span className="icon" aria-hidden="true"></span></button>
					<div class="accordion-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>

        <div className="accordion-item">
					<button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Kullanıcı Girişi Hakkında</span><span className="icon" aria-hidden="true"></span></button>
					<div class="accordion-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>

        <div className="accordion-item">
					<button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Gizlilik</span><span className="icon" aria-hidden="true"></span></button>
					<div class="accordion-content">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>


			</div>
		</div>
  
  )
}

export default HelpCenter