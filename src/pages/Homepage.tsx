import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import Col1 from "../components/Col1";
import Col3 from "../components/Col3";
import RecCard1 from "../components/RecCard1";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "F$LOCOFY_POPUP$";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.homepage}>
          <div className={styles.heroSection}>
            <header className={styles.topHeader}>
              <div className={styles.topContainer}>
                <button className={styles.fickleflightLogo}>
                  <img
                    className={styles.symbolsIcon}
                    alt=""
                    src="../symbols.svg"
                  />
                </button>
                <div className={styles.navigationRight}>
                  <div className={styles.navigationMenu}>
                    <button className={styles.explore}>Explore</button>
                    <div className={styles.search} onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className={styles.search} onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className={styles.offers}>Offers</button>
                  </div>
                  <div className={styles.accountSection}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="../notification.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="../notification1.svg"
                    />
                    <img
                      className={styles.profilePictureIcon}
                      alt=""
                      src="../top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSection}>
              <div className={styles.bannerGradient} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="../banner--background@2x.png"
              />
              <div className={styles.searchContainer}>
                <div className={styles.title}>
                  <div
                    className={styles.letsExplore}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBest}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchForm}>
                  <div className={styles.formTitleGroup}>
                    <b className={styles.searchFlights}>Search flights</b>
                    <div className={styles.flightOptions}>
                      <div className={styles.flightType}>
                        <FormControlLabel
                          className={styles.radio}
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className={styles.radio1}
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formInputsRow}>
                    <div className={styles.inputsRow}>
                      <Autocomplete
                        className={styles.departureField}
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)",
                          "Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                      <div className={styles.arrivalField}>
                        <div className={styles.input}>
                          <div className={styles.labelContainer}>
                            <div className={styles.arrival}>Arrival</div>
                          </div>
                          <div className={styles.active}>
                            <div className={styles.muiautocompletetag}>
                              <div className={styles.chip}>
                                <div className={styles.container}>
                                  <div className={styles.avatar}>
                                    <div className={styles.op}>F</div>
                                  </div>
                                  <div className={styles.typography}>
                                    <div className={styles.chip1}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.notificationBellIcon}
                                    alt=""
                                    src="../cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.chip}>
                                <div className={styles.container}>
                                  <div className={styles.avatar}>
                                    <div className={styles.op}>F</div>
                                  </div>
                                  <div className={styles.typography}>
                                    <div className={styles.chip1}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.notificationBellIcon}
                                    alt=""
                                    src="../cancel.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.losAngelesLa}>
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.departureField}>
                        <DatePicker
                          label="Date"
                          value={selectOutlinedDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setSelectOutlinedDateTimePickerValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className={styles.buttonGroup}>
                      <div className={styles.searchFlightsButton}>
                        <div className={styles.button}>Search flights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContents}>
            <div className={styles.upcomingFlightSection}>
              <div className={styles.upcomingFlightSection1}>
                <b className={styles.recentSearches}>Recent Searches</b>
                <div className={styles.flightDetails}>
                  <div className={styles.recentSearches1}>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>SIN</b>
                        </div>
                        <img
                          className={styles.durationIcon}
                          alt=""
                          src="../duration.svg"
                        />
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>LAX</b>
                        </div>
                      </div>
                      <div className={styles.departOn7Container}>
                        <b>{`Depart on: `}</b>
                        <span>7 Sep 2021</span>
                      </div>
                    </div>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>MY</b>
                        </div>
                        <img
                          className={styles.durationIcon}
                          alt=""
                          src="../duration1.svg"
                        />
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>DUB</b>
                        </div>
                      </div>
                      <div className={styles.departOn7Container}>
                        <b>Depart on:</b>
                        <span> 9 Sep 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.prepareMenu}>
                    <div className={styles.recentSearches}>
                      Prepare for your trip
                    </div>
                    <div className={styles.tripMenus}>
                      <button className={styles.hotel}>
                        <img
                          className={styles.hotelIcon}
                          alt=""
                          src="../hotel-icon.svg"
                        />
                        <div className={styles.hotel1}>Hotel</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background} />
                          <img
                            className={styles.ticketIcon}
                            alt=""
                            src="../ticket.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Attractions</div>
                      </button>
                      <button className={styles.hotel}>
                        <img
                          className={styles.hotelIcon}
                          alt=""
                          src="../eats-icon.svg"
                        />
                        <div className={styles.attractions1}>Eats</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background1} />
                          <img
                            className={styles.trainIcon}
                            alt=""
                            src="../vector.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Commute</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.taxiIcon}>
                          <div className={styles.background2} />
                          <img
                            className={styles.taxiIcon1}
                            alt=""
                            src="../vector1.svg"
                          />
                        </div>
                        <div className={styles.taxi1}>Taxi</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background3} />
                          <img
                            className={styles.movieIcon}
                            alt=""
                            src="../vector2.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Movies</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitles}>
                <div className={styles.titleContainer}>
                  <b className={styles.recentSearches}>Plan your next trip</b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <button className={styles.viewAllTop}>
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="../arrowright.svg"
                  />
                </button>
              </div>
              <div className={styles.cardsContainer}>
                <Col1
                  parisImage="../parisimage@2x.png"
                  paris="Paris"
                  prop="$699"
                />
                <Col1
                  parisImage="../greeceimage@2x.png"
                  paris="Greece"
                  detailsWidth="99.92px"
                  prop="$1079"
                  propDisplay="unset"
                  propWidth="unset"
                  fromLeft="47.39px"
                />
                <Col3 />
                <Col1
                  parisImage="../tuscanyimage@2x.png"
                  paris="Tuscany"
                  detailsWidth="100.62px"
                  prop="$1245"
                  propWidth="100.62px"
                  fromLeft="48.09px"
                />
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="../arrowright1.svg"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitle}>
                <b className={styles.recommendedHolidays}>
                  Recommended Holidays
                </b>
                <button className={styles.viewAllHolidaysParent}>
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="../arrowright2.svg"
                  />
                </button>
              </div>
              <div className={styles.recCardsContainer}>
                <RecCard1 />
                <button className={styles.recCard2}>
                  <img
                    className={styles.switzerlandimageIcon}
                    alt=""
                    src="../switzerlandimage@2x.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.swissParent}>
                        <div className={styles.swiss}>Swiss</div>
                        <div className={styles.d5n}>6D5N</div>
                      </div>
                      <div className={styles.div}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.switzerlandimageIcon}
                    alt=""
                    src="../boracayimage@2x.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.swissParent}>
                        <div className={styles.swiss}>Boracay</div>
                        <div className={styles.d5n}>5D4N</div>
                      </div>
                      <div className={styles.div}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.switzerlandimageIcon}
                    alt=""
                    src="../palawanimage@2x.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.swissParent}>
                        <div className={styles.swiss}>Palawan</div>
                        <div className={styles.d5n}>4D3N</div>
                      </div>
                      <div className={styles.div}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="../arrowright3.svg"
                />
              </div>
            </div>
            <div className={styles.popularStays}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStays1}>Popular Stays</b>
                </div>
                <button
                  className={styles.viewAllStaysButton}
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="../arrowright4.svg"
                  />
                </button>
              </div>
              <div className={styles.hotelCards}>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="../unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuites}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.night}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(60 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div3}>4.9</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../vector3.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="../unsplashtsn8bpopveo@2x.png"
                    />
                    <div className={styles.stayDetails1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.matterhornSuites}>
                          Discovery Shores
                        </b>
                        <div className={styles.night}>$360/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(116 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div3}>4.8</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../vector4.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard4}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="../unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className={styles.stayDetails2}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                        <div className={styles.night}>$420/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup2}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews2}>(78 reviews)</div>
                      <div className={styles.groupDiv}>
                        <div className={styles.div5}>4.7</div>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="../vector5.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard41}>
                  <div className={styles.hotelCard5}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="../unsplashyqrybvxug5q@2x.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Deluxe King Room
                        </div>
                        <b className={styles.arcticHut}>Lake Louise Inn</b>
                        <div className={styles.night}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="../video.svg"
                        onClick={openMatterhornPopup3}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(63 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div3}>4.6</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../vector6.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.mobileViewAllStays}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="../arrowright5.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.subscribeSection}>
              <img
                className={styles.subscribeSectionBackground}
                alt=""
                src="../subscribe-section-background@2x.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeader}>
                  <b className={styles.recentSearches}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitle}>Get weekly updates</b>
                </div>
                <div className={styles.form}>
                  <div className={styles.formText}>
                    <div className={styles.fillInYour}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFields}>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input1}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input1}
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className={styles.button5}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.button6}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleflightBio}>
                <img className={styles.logoIcon} alt="" src="../logo.svg" />
                <div className={styles.fickleFlightIs}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="../social-icons.svg"
                />
              </div>
              <div className={styles.footerChild} />
              <div className={styles.footerLinks}>
                <div className={styles.company}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.company1}>Company</div>
                  <div className={styles.news}>News</div>
                  <div className={styles.careers}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.company}>
                  <div className={styles.account}>Account</div>
                  <div className={styles.support1}>Support</div>
                  <div className={styles.supportCenter}>Support Center</div>
                  <div className={styles.faq}>FAQ</div>
                  <div className={styles.accessibility}>Accessibility</div>
                </div>
                <div className={styles.more}>
                  <div className={styles.covidAdvisory}>Covid Advisory</div>
                  <div className={styles.more1}>More</div>
                  <div className={styles.airlineFees}>Airline Fees</div>
                  <div className={styles.tips}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
