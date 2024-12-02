import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import amazon from '../../assets/amazon-logo-white.png';
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";



const Header = () => {
  const [{basket}, dispach]= useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => 
  {return item.amount + amount}
  , 0)
  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* Logo Section */}
          <div className={styles.logo__container}>
            <Link to="/">
              <img src={amazon} alt="amazon logo" />
            </Link>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* If you need the Search Section, uncomment below */}
          
          <div className={styles.search}>
            <select>
              <option>All</option>
              <option>Art and crafts</option>
              <option>Automotive</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Software</option>
              <option>Baby</option>
            </select>
            <input type="text" />
            <BsSearch size={43} />
          </div> 
         

          {/* Other Sections can be uncommented if needed */}
          
          <div className={styles.order__container}>
            <Link to="#" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="Flag"
              />
              <select>
                <option>EN</option>
              </select>
            </Link>
            <Link to="/Auth">
              <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div> 
         
        </div>
        <LowerHeader />
      </section>
    </section>
  );
};

export default Header;
