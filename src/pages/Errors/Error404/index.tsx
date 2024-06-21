import { memo } from 'react'

//react-bootstrap
import {Container} from 'react-bootstrap'

//router
import {Link} from 'react-router-dom'

const Error404 = memo(() => {
    return (
        <>
            <div className="gradient">
                <Container>
                    {/* <Image src={error404} className="img-fluid mb-4 w-100" alt=""/>  */}
                    <h1 style={{fontSize: '300px', fontWeight: '800'}}>404</h1>
                    <h2 className="mb-0 mt-4 text-white">Oops! This Page is Not Found.</h2>
                    <p className="mt-2 text-white">The requested page dose not exist.</p>
                    <Link className="btn bg-white text-primary d-inline-flex align-items-center" to="/">Back to Home</Link>
                </Container>
                <div className="box">
                    <div className="c xl-circle">
                        <div className="c lg-circle">
                            <div className="c md-circle">
                                <div className="c sm-circle">
                                    <div className="c xs-circle">                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}
)

Error404.displayName="Error404"
export default Error404;
