import { memo, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { LocalVideo } from "./ItemDetailsContent";

import dynamic from "next/dynamic";

const ProjectSlider = dynamic(() => import("./ItemDetailsContent"), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll("#bl-panel-work-items>div").length);
  }, []);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id='bl-panel-work-items'
    >
      {/* Project Starts */}
      <div
        data-panel='panel-1'
        className={activeProject == 1 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img
              className='responsive-img'
              src='/images/projects/P_1_1.JPG'
              alt='project'
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Envato</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'> Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  php, html, css, javascript
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              link <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-2'
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <ProjectSlider />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>40 Under 40 Award</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:
                <span className='font-weight-400 uppercase'>
                  <a
                    style={{
                      marginLeft: "2px",
                      textDecoration: "underline",
                      color: "#fff",
                    }}
                    href='https://businesseliteawards.com/40-under-40/'
                  >
                    Business Elite Award
                  </a>
                </span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>2023</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 ' style={{ fontSize: "16px" }}>
                  Honored as one of the top 40 business leaders under the age of
                  40 in the MENA region by Business Elite Awards, a
                  distinguished program that recognizes and connects the most
                  successful and ambitious entrepreneurs worldwide. This
                  prestigious accolade celebrates the remarkable achievements
                  and entrepreneurial spirit of young leaders, showcasing their
                  significant contributions to the business landscape
                </span>
              </li>
            </ul>
            <hr />
            <a href='' className='waves-effect waves-light btn font-weight-700'>
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-3'
        className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <div className='videocontainer'>
              {activeProject == 3 && (
                <iframe
                  className='youtube-video'
                  src='https://www.youtube.com/embed/7e90gBu4pas'
                  title='YouTube video player'
                  frameBorder={0}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen=''
                />
              )}
            </div>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Youtube Video</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Photodune</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe After Effects, Adobe Audition
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-4'
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <LocalVideo playing={activeProject} />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Local Video</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Videohive</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe After Effects, Movie Maker
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-5'
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img src='images/projects/project-5.jpg' alt='project' />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Graphicriver</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe Photoshop, Gimp
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-6'
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img src='images/projects/project-6.jpg' alt='project' />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Activeden</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe Flash, Paint
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-7'
        className={activeProject == 7 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img src='images/projects/project-7.jpg' alt='project' />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>3D Ocean</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  3DS Max, Adobe Photoshop
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-8'
        className={activeProject == 8 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img src='images/projects/project-8.jpg' alt='project' />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Audiojungle</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe Audition, Adobe Premiere
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel='panel-9'
        className={activeProject == 9 ? "bl-show-work" : ""}
      >
        <div className='row'>
          {/* Project Main Content Starts */}
          <div className='col s12 l6 xl6 section-padding section-padding-right-none'>
            <img src='images/projects/project-9.jpg' alt='project' />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className='col s12 l6 xl6 section-padding'>
            <h3 className='font-weight-700 uppercase'>Image Project</h3>
            <ul className='project-details second-font'>
              <li>
                <i className='fa fa-user' />
                <span className='font-weight-700'> Organization </span>:{" "}
                <span className='font-weight-400 uppercase'>Audiojungle</span>
              </li>
              <li>
                <i className='fa fa-calendar-o' />
                <span className='font-weight-700'> Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/09/2022</span>
              </li>
              {/* <li>
                <i className='fa fa-calendar-check-o' />
                <span className='font-weight-700'> End Date </span>:{" "}
                <span className='font-weight-400 uppercase'>02/08/2023</span>
              </li> */}
              <li>
                <i className='fa fa-cogs' />{" "}
                <span className='font-weight-700'>Description</span> :{" "}
                <span className='font-weight-400 uppercase'>
                  Adobe Audition, Adobe Premiere
                </span>
              </li>
            </ul>
            <hr />
            <a
              href='#'
              className='waves-effect waves-light btn font-weight-700'
            >
              Link
              <i className='fa fa-external-link' />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Portfolio Navigation Starts */}
      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className='control-button bl-previous-work'
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className='fa fa-angle-left' />
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <img
          alt='close'
          src='images/close-button.png'
          className='control-button bl-icon-close'
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className='control-button bl-next-work'
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1
            )
          }
        >
          <i className='fa fa-angle-right' />
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
