import React from 'react';
import './style/Cardstyle.css';

const Cardcomp = ({ lists }) => {
    return (
        <div id='mainAlign'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {lists.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col" id='highlight'>
                                    <div class="card h-100">

                                        <div class="card-body" id='cardAlign'>
                                            <p class="card-text">{item.title}</p>
                                            <h5 class="card-title">{item.price} </h5>
                                            <hr />
                                            {/* <i class="fa-solid fa-check"></i> */}
                                            <ul class="fa-ul">
                                              
                                                <li>{item.user1 == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}{item.user}</li>
                                                <li>{item.storage == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}50GB Storage</li>
                                                <li>{item.publicProjects == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Unlimited Public Projects</li>
                                                <li>{item.communityAccess == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Community Access</li>

                                                                                               
                                                <li style={{color: item.privateProjects? 'black': 'lightgrey'}} >{item.privateProjects == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Unlimited Private Projects</li>
                                                <li style={{color: item.phoneSupport? 'black': 'lightgrey'}}>{item.phoneSupport == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Dedicated Phone Support</li>
                                                <li style={{color: item.subDomain? 'black': 'lightgrey'}}>{item.subDomain == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Free SubDomain</li>
                                                <li style={{color: item.status? 'black': 'lightgrey'}}>{item.status == true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}Monthly Status Report</li>

                                                

                                            </ul>
                                        </div>

                                        <div class="d-grid gap-2 col-6 mx-auto">
                                            <button class="btn btn-primary" type="button">Button</button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}



            </div>
        </div>
    );
};

export default Cardcomp;