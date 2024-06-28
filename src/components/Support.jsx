
export default function Support(){
    return(
        <div id="contact-support" className="">
            <img src="/images/support/support.svg" alt="Vertex" width={80} className="img-fluid" id="support-icon"/>
            <div className="text-center rounded" id="support-content">
                <div className="pt-2">
                    <a href="https://wa.me/" target="_blank">
                        <img src="/images/support/whatsapp.svg" alt="Vertex" width={60} className="img-fluid" id="support-icon"/>
                    </a>
                </div>
                <div className="p-2">
                    <a href="mailto:contact@gulfdrug.com" target="">
                        <img src="/images/support/email.svg" alt="Vertex" width={60} className="img-fluid" id="support-icon"/>
                    </a>
                </div>
                <div className="pb-2">
                    <a href="https://www.linkedin.com/company/vertex-co/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=pk" target="_blank">
                        <img src="/images/support/linkedin.svg" alt="Vertex" width={60} className="img-fluid" id="support-icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}