import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const OnboardedCompanies = () => {
  return (
    <div>

      <div class="frame-parent10">
        <div class="onboarded-companies-wrapper">
          <h2 class="companies-status">Onboarded Companies</h2>
          <hr />
        </div>
        <tr>
          <td class="td1" colspan="{2}">
            <div class="select">
              <div class="container1">
                <div class="value">All</div>
                <div className='arrow'>
                  <FontAwesomeIcon icon={faChevronRight} rotation={90} />
                </div>
                <div class="label-container">
                  <div class="mask-label"></div>
                  <div class="label">Service type</div>
                </div>
              </div>
            </div>
          </td>
          <td class="td" colspan="{6}">
            {/* <input class="textfield" type="text" placeholder='      Search client or invoice number...' /> */}
            <div class="textfield-container">
              <span class="fa-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input class="textfield" type="text" placeholder="Search client or invoice number..." />
            </div>

          </td>
        </tr>

        <table class="tableviewinvoice">
          <tbody>

            <tr className='td1-row'>
              <td class="td1" colspan="{2}">
                <div class="tablecell">
                  <div class="stack2 CN">
                    <div class="th-text1">Company Name</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell">
                  <div class="stack2">
                    <div class="th-text1">Onboarding date</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell">
                  <div class="stack2">
                    <div class="th-text1">Go-Live Date</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell">
                  <div class="stack2">
                    <div class="th-text1">Total User base</div>
                  </div>
                </div>
              </td>
              <td class="td1" colspan="{2}">
                <div class="tablecell">
                  <div class="stack2">
                    <div class="th-text1">Last Billing</div>
                  </div>
                </div>
              </td>
              <td class="td">
                <div class="tablecell">
                  <div class="stack2">
                    <div class="th-text1">Status</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="tr">
              <td class="td1" colspan="{2}">
                <div class="tablecell6">
                  <div class="stack8">
                    <div class="account">
                      <img
                        class="container-icon"
                        alt=""
                        src="./images/tc-logo.png"
                      />
                    </div>
                    <div class="with-subline">
                      <div class="name1">Texlaculture</div>
                      <div class="subline">INV-17048</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">12 Jan 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">07 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">244</div>
                  </div>
                </div>
              </td>
              <td class="td1" colspan="{2}">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">07 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td class="td">
                <div class="tablecell11">
                  <div class="label1">
                    <b class="label2">Active</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="tr">
              <td class="td1" colspan="{2}">
                <div class="tablecell12">
                  <div class="stack13">
                    <div class="account">
                      <img
                        class="container-icon"
                        alt=""
                        src="./images/tc-logo.png"
                      />
                    </div>
                    <div class="with-subline1">
                      <div class="name3">Pinch Life</div>
                      <div class="subline1">INV-17049</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">11 Feb 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">06 May 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">1000</div>
                  </div>
                </div>
              </td>
              <td class="td1" colspan="{2}">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">07 Aug 2022-</div>
                  </div>
                </div>
              </td>
              <td class="td">
                <div class="tablecell11">
                  <div class="label1">
                    <b class="label2">Active</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="tr">
              <td class="td1" colspan="{2}">
                <div class="tablecell18">
                  <div class="stack13">
                    <div class="account">
                      <img
                        class="container-icon"
                        alt=""
                        src="./images/tc-logo.png"
                      />
                    </div>
                    <div class="with-subline1">
                      <div class="name3">O Buddy</div>
                      <div class="subline1">INV-13042</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">10 Sep 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell7">
                  <div class="stack3">
                    <div class="dd-mmm-yyyy1">05 Oct 2022</div>
                  </div>
                </div>
              </td>
              <td class="td1">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">150</div>
                  </div>
                </div>
              </td>
              <td class="td1" colspan="{2}">
                <div class="tablecell9">
                  <div class="stack3">
                    <div class="td-text">207 Aug 2022</div>
                  </div>
                </div>
              </td>
              <td class="td">
                <div class="tablecell11">
                  <div class="label5">
                    <b class="label6">Draft</b>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="tr">
              <td class="td27">
                <div class="switch">
                  <div class="switch-container">
                    <div class="switch1">
                      <div class="thumb"></div>
                    </div>
                  </div>
                  <div class="label-end">Dense</div>
                </div>
              </td>


              <td class="td27 bottom" colspan="{4}">
                <div class="rows-per-page">Rows per page:</div>
              </td>
              <td class="td27 bottom">
                <div class="select1">
                  <div class="label-end ">5</div>
                  <img
                    class="iconsic-notifications"
                    alt=""
                    src="./images/ic_expand_more.svg"
                  />
                </div>
              </td>
              <td class="td27 bottom">
                <div class="label-end">6-10 of 11</div>
              </td>
              <td class="td31 bottom">
                <div class="nextprev">
                  <div class="iconbutton">
                    <img
                      class="iconsic-search"
                      alt=""
                      src="./images/left_cursor.svg"
                    />
                  </div>
                  <div class="iconbutton">
                    <img
                      class="iconsic-search"
                      alt=""
                      src="./images/right_cursor.svg"
                    />
                  </div>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OnboardedCompanies