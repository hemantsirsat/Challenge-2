import style from "../styles/Card.module.css";

import sedans from "../public/icon-sedans.svg";
import suvs from "../public/icon-suvs.svg";
import luxury from "../public/icon-luxury.svg";

export default function Card () {
    return(
        <div className={style.cardcontainer}>
            <div className={style.sedancardContainer}>
                <div className={style.sedancontent}>    
                    <div className={style.vehicleimage}>
                        <img 
                            src={sedans.src}
                        />
                    </div>
                    <div className={style.vehicletype}>
                        sedans
                    </div>
                    <div className={style.vehicledescription}>
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.
                    </div>
                    <div className={style.learnmorecontainer}>
                        <button
                            className={style.sedanlearnmorebutton}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.suvscardContainer}>
                <div className={style.suvscontent}>    
                    <div className={style.vehicleimage}>
                        <img 
                            src={suvs.src}
                        />
                    </div>
                    <div className={style.vehicletype}>
                        suvs
                    </div>
                    <div className={style.vehicledescription}>
                        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
                    </div>
                    <div className={style.learnmorecontainer}>
                        <button
                            className={style.suvslearnmorebutton}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.luxurycardContainer}>
                <div className={style.luxurycontent}>    
                    <div className={style.vehicleimage}>
                        <img 
                            src={luxury.src}
                        />
                    </div>
                    <div className={style.vehicletype}>
                        luxury
                    </div>
                    <div className={style.vehicledescription}>
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </div>
                    <div className={style.learnmorecontainer}>
                        <button
                            className={style.luxurylearnmorebutton}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}