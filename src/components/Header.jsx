import React from "react";

const Header = () => {
    return (
        <header class="header">
        <div class="container">
          <div class="header__inner">
            <a class="logo" href="#">
              <img src="images/logo.svg" alt="tealux" />
            </a>
            <nav class="menu">
              <button className="menu__btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul class="menu__list">
                <li class="menu__item"><a href="#" class="menu__link">Black</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Green</a></li>
                <li class="menu__item"><a href="#" class="menu__link">White</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Oolong</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Pu-erh</a></li>
              </ul>
            </nav>
            <ul className="user-actions">
              <li class="user-actions__item">
                <a href="#" class="user-actions__link">
                  <img src="images/cant.svg" alt="" />
                </a>
              </li>
              <li class="user-actions__item">
                <a href="#" class="user-actions__link">
                  <img src="images/user.svg" alt="" />
                </a>
              </li>
              <li class="user-actions__item user-actions__item__search">
                <a href="#" class="user-actions__link">
                  <img src="images/search.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
    )
};

export default Header;