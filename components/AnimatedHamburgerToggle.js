import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

export default function AnimatedHamburgerToggle() {
  // !the navbar is set to false to set the state of "closed"
  //  @ when the menu button is clicked, we can then call the updater function, setNavBarOpen, to update the state
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  return (
    <>
      <style jsx>{`
        button {
          background: none;
          border: none;
        }

        /****** Rotate Center ******/

        .rotateCenter {
          -webkit-animation: rotateCenter 0.6s ease-in-out both;
          animation: rotateCenter 0.6s ease-in-out both;
          display: flex;
        }

        @-webkit-keyframes rotateCenter {
          0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes rotateCenter {
          0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        /****** Flip Horizontal Bottom ******/

        .flipHorizontalBottom {
          -webkit-animation: flipHorizontalBottom 0.4s
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          animation: flipHorizontalBottom 0.4s
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          display: flex;
        }

        @-webkit-keyframes flipHorizontalBottom {
          0% {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
          }
          100% {
            -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
          }
        }
        @keyframes flipHorizontalBottom {
          0% {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
          }
          100% {
            -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
          }
        }
      `}</style>
      <section>
        <div className="content">
          <button className="emoji " onClick={handleToggle}>
            {navbarOpen ? (
              <div className="rotateCenter">
                <CloseIcon
                  sx={{
                    color: 'ghostwhite',
                  }}
                />
              </div>
            ) : (
              <div className="flipHorizontalBottom">
                <MenuIcon
                  sx={{
                    color: 'ghostwhite',
                  }}
                />
              </div>
            )}
          </button>
        </div>
      </section>
    </>
  )
}
