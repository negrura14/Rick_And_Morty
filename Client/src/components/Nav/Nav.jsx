import React from "react";
import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import {ROUTES} from '../../helpers/RoutesPath';

const Nav = (props) => {
    const {onSearch} = props;

    return (
         <div className={styles.navbar}>
            <div className={styles.wrapperLink}>
                <Link className={styles.link} to={ROUTES.HOME}>
                    Home</Link>
                <Link className={styles.link} to={ROUTES.ABOUT}>
                    About</Link>
                <Link className={styles.link} to={ROUTES.FAVORITES}>
                    Favorites</Link>
            </div>
                <SearchBar onSearch = {onSearch}/>
        </div>
        
    );
};

export default Nav;