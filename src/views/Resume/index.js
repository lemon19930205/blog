import React, { Component } from 'react'

import './css/index.css'
import './css/fontello.min.css'

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="container">
          <div className="sidebar">
            <div className="title">
              <img src="images/laozhou.jpg" alt="" />
              <h1>lemon的简历</h1>
              <h2>前端er</h2>
            </div>
            <div className="sid-info">
              <dl>
                <dt>
                  <i className="icon-bookmark"></i>联系方式
                </dt>
                <dd>
                  <i className="icon-phone-1"></i>电话：xxxx
                </dd>
                <dd>
                  <i className="icon-mail-alt"></i>邮箱：xxxx
                </dd>
                <dd>
                  <i className="icon-wechat"></i>微信：xxxx
                </dd>
                <dd>
                  <i className="icon-qq"></i>QQ：xxxx
                </dd>
              </dl>
              <dl>
                <dt>
                  <i className="icon-bookmark"></i>应聘岗位
                </dt>
                <dd>前端工程师</dd>
              </dl>
            </div>
            <div className="note">
              <p>
                前端攻城狮一枚，追求完美的代码，喜欢科幻小说、电影、动漫，目前正在寻找工作，欢迎骚扰
              </p>
            </div>
          </div>
          <div className="main">
            <ul className="main-info">
              <li className="someOne">
                <dl>
                  <dt>
                    <i className="icon-bookmark"></i>基本信息
                  </dt>
                  <dd>
                    <strong>个人信息：</strong>
                    <span>周xx/男</span>
                  </dd>
                  <dd>
                    <strong>毕业院校：</strong>
                    <span>XXX</span>
                  </dd>
                  <dd>
                    <strong>工作年限：</strong>
                    <span>五年</span>
                  </dd>
                  <dd>
                    <strong>博客：</strong>
                    <span></span>xxx
                  </dd>
                  <dd>
                    <strong>GitHub：</strong>
                    <span>https://github.com/lemon19930205</span>
                  </dd>
                </dl>
              </li>
              <li>
                <dt>
                  <i className="icon-bookmark"></i>项目与工作经验
                </dt>
                <h3>东方银谷（2015.7-2017.9）</h3>
                <ul className="exp">
                  <li>
                    <div className="circle"></div>
                    <h4>银谷普惠CRM</h4>
                    <h5>
                      技术栈: bootstrap + react + react-router + react-redux +
                      fetch + babel + webpack + ES6/ES7
                    </h5>
                    <span>项目介绍：</span>
                    <p>
                      普惠端(贷款端)的CRM客户订单管理管理系统，用于跟踪记录客户的借款信息，统计客户经理的业绩，主要对客户信息进行添加、删除、修改、查询，可根据客户信息跟进所属部门和客户经理的分配，设有阶梯式权限和订单审核机制
                    </p>
                    <span>个人职责：</span>
                    <ul className="small">
                      <li>
                        <p>1. 使用bootstrap 实现静态页面展示</p>
                      </li>
                      <li>
                        <p>
                          2.
                          前端框架采用react，组件化实现最大限度的复用，便于维护
                        </p>
                      </li>
                      <li>
                        <p>
                          3. 由react-router 控制页面级组件切换，实现路由功能
                        </p>
                      </li>
                      <li>
                        <p>4. 通过react-redux 实现复杂的数据交互</p>
                      </li>
                      <li>
                        <p>
                          5. 使用fetch实现前后端数据交互，登陆认证和权限管理
                        </p>
                      </li>
                      <li>
                        <p>6. 使用webpack 打包上线</p>
                      </li>
                      <li>
                        <p>
                          7.
                          项目全部使用ES6/ES7进行编写，确保代码的简洁、优雅、美观
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <h4>银谷财富CRM</h4>
                    <h5>
                      技术栈: react + react-router + react-redux + fetch + babel
                      + webpack
                    </h5>
                    <span>项目介绍：</span>
                    <p>
                      财富端(理财端)的CRM客户订单管理管理系统，用于记录客户的理财信息，统计销售人员的业绩，客户信息的增删改查，登陆人员的权限设置
                    </p>
                    <span>个人职责：</span>
                    <ul className="small">
                      <li>
                        <p>1. 用react全家桶进行前端开发</p>
                      </li>
                      <li>
                        <p>2. 使用fetch实现前后端交互，登陆认证和权限管理</p>
                      </li>
                      <li>
                        <p>3. 使用webpack 打包上线</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <h4>
                      东方银谷官网 <a href="http://www.yingu.com/">链接</a>
                    </h4>
                    <h5>
                      技术栈: less + rem + media + jQuery + swiper + bootstrap +
                      ajax
                    </h5>
                    <span>项目介绍：</span>
                    <p>
                      公司的官网，展示公司的实时信息，总公司和所有子公司的介绍，人才招聘信息等
                    </p>
                    <span>个人职责：</span>
                    <ul className="small">
                      <li>
                        <p>
                          1.
                          采用响应式布局，并利用媒体查询实现PC端和移动端一体化
                        </p>
                      </li>
                      <li>
                        <p>
                          2. 使用bootstrap实现页面布局，jQuery实现页面的交互效果
                        </p>
                      </li>
                    </ul>
                    <img src="./images/dongfangyingu.png" width="250px" />
                  </li>
                  <li>
                    <div className="circle"></div>
                    <h4>银谷在线</h4>
                    <h5>
                      技术栈：H5 + CSS3 + less + jQuery + swiper + iscorll +
                      bootstrap + ajax
                    </h5>
                    <span>项目介绍：</span>
                    <p>总公司旗下银谷财富(理财端)的线上理财网站</p>
                    <span>个人职责：</span>
                    <ul className="small">
                      <li>
                        <p>1. 使用bootstrap 进行页面布局</p>
                      </li>
                      <li>
                        <p>
                          {' '}
                          2.
                          使用swiper插件实现页面效果，包括使用原生JS在移动端APP实现类似效果，并优化
                        </p>
                      </li>
                      <li>
                        <p>
                          3.
                          使用ajax实现交互效果，对数据库中用户信息的增删改查等
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <h3>互联万邦（2014.6 - 2015.6）</h3>
                <ul className="exp">
                  <li>
                    <div className="circle"></div>
                    <h4>
                      官网项目 <a href="http://www.bjwbwl.com/">链接</a>
                    </h4>
                    <h5>技术栈：html + css + jq + js</h5>
                    <p>公司的官方展示页</p>
                    <img src="./images/hulianwanbang.png" width="250px" />
                  </li>
                </ul>
              </li>
              <li>
                <dt>
                  <i className="icon-bookmark"></i>个人技能
                </dt>
                <h3>前端</h3>
                <ul className="exp">
                  <li>
                    <div className="circle"></div>
                    <p>
                      熟练掌握前端布局，JS(ES5+ES6),
                      熟悉W3C标准,了解主流浏览器的兼容性处理，熟悉HTTP工作原理及前端性能优化，对前端工程化有一定的认识和实践
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      熟悉JS核心技术，包括并不限于ajax / dom / bom / jsonp 等
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      熟悉H5开发，响应式布局，了解H5最新规范，能够熟练运用css3
                      动画等特性，掌握swiper / iscorll等插件
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      掌握面向对象编程思想，熟练使用前端框架
                      React全家桶，对vue有一定的了解
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>熟练使用bootstrap / jQuery / zepto等快速开发插件</p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>了解node.js 和express，实现mongoDB数据库的增删改查</p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>掌握webpack 等项目构建打包工具，用 git 进行代码管理</p>
                  </li>
                </ul>
                <h3>其他属性</h3>
                <ul className="exp">
                  <li>
                    <p>
                      热爱互联网行业，善于思考，逻辑性强，数学基础扎实，喜欢挑战有难度的问题，喜欢尝试新的技术
                    </p>
                  </li>
                  <li>
                    <p>轻度强迫症，代码洁癖，完美主义</p>
                  </li>
                  <li>
                    <p>性格内敛，善于高效沟通，懂得换位思考。</p>
                  </li>
                  <li>
                    <p>喜欢阅读历史和科幻类书籍，对经济学有一定的理解</p>
                  </li>
                  <li>
                    <p>知乎重度用户，罗辑思维忠实观众</p>
                  </li>
                  <li>
                    <p>LOL Carry型上单</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>By lemon (2020-8-12)</p>
        </footer>
      </div>
    )
  }
}
