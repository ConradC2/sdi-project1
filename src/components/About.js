import NavBar from './NavBar'
import Footer from './Footer';
import styles from '../css/About.module.css';

function About (){
    return (
        
        <div>
            <NavBar />
            <header className={styles.header}>ABOUT THE TEAM</header>
            <div className={styles.container}>
            
            <article className={styles.article}>
                <h1 className={styles.student}>  Derek Tissaw</h1>
                <p className={styles.info}>Derek is a person.</p>
            </article>
            <article className={styles.article}>
                <h1 className={styles.student}>Talmadge Bookert Jr</h1>
                <p className={styles.info}>Talmadge is an active duty Army E-4 Specialist. His MOS is 25Uniform Signal 
                    Support Specialist, where he is very skilled in installing an operating the 
                    JCRs, wide variety of radio sets, and the put up and take down of long range 
                    antenennas.
                </p>
            </article>
            <article className={styles.article}>
                <h1 className={styles.student}> Antoine Davis</h1>
                <p className={styles.info}>Dolla dolla bills y'all!</p>
            </article>
            <article className={styles.article}>
                <h1 className={styles.student}> Curtis Conrad</h1>
                <p className={styles.info}>Curtis is an active duty Air Force Senior Non-Commissioned Officer.  He serves 
                    as a Knowledge manager providing the framework for capturing, harnessing and 
                    exploiting intellectual capital, thus improving upon individual and organizational 
                    performance through the use of knowledge management practices and collaborative 
                    technologies. He is using design thinking and applying it to improve organizational 
                    and individual performance and efficiencies of knowledge intensive processes, 
                    activities, and tasks.  He is passionate about leveraging today's technology to close 
                    knowledge gaps within organizations.

                </p>
            </article>
            </div>
            
            <Footer />
        </div>
    )

}
export default About;


