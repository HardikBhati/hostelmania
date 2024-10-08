import React, { useState, useEffect, useContext } from "react";
import classes from "./mobile.module.scss";
import NavModal from "../../modals/NavModal";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import AuthContext from "../../context/authContext";

interface types {
  click: () => void;
}

const MobileNav: React.FC<types> = ({ click }) => {
  const { auth, removeAuth } = useContext(AuthContext);

  return (
    <>
      <NavModal>
        <div className={classes.mob}>
          <div className={classes.main}>
            <div className={`flex ${classes.head}`}>
              <h1>YelpCamp</h1>
            </div>
            <div className={`flex ${classes.icon}`} onClick={click}>
              <GrClose className={classes.close} />
            </div>
          </div>
          <div className={classes.li}>
            <Link href="/hostels">
              <div className={classes.route}>Campgrounds</div>
            </Link>
            {/* <Link href="/profile"> */}
            {/* <div className={classes.route}>Profile</div> */}
            {/* </Link> */}
            <Link href="/new">
              <div className={classes.route}>New</div>
            </Link>
            {!auth && (
              <>
                <Link href="/login">
                  <div className={classes.route}>Login</div>
                </Link>
                <Link href="/signup">
                  <div className={classes.route}>SignUp</div>
                </Link>
              </>
            )}
            {auth && (
              <>
                <Link href="/login">
                  <div className={classes.route} onClick={removeAuth}>
                    Logout
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </NavModal>
    </>
  );
};

export default MobileNav;
