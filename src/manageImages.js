import "./styles/styles.css"
import myImage from "./assets/my_potrait.png"
import python from "./assets/python.png"
import javascript from "./assets/javascript.png"
import react from "./assets/react.png"
import node from "./assets/node.png"
import flask from "./assets/flask.png"
import mongo from "./assets/mongodb.png"
import html from "./assets/html.png"
import css from "./assets/css-ico.png"
import webpack from "./assets/webpack.png"
import express from "./assets/express.png"
import api from "./assets/api.png"
import sql from "./assets/sql.png"
import git from "./assets/git.png"
import github from "./assets/github.png"
import livePrev from "./assets/open.png"
import cart from "./assets/cart.png"
import weather from "./assets/weather.png"
import todo from "./assets/todo.png"
import cv from "./assets/cv-gen.png"
import keep from "./assets/keep.png"
import linkedInImg from "./assets/linkedin.png"
import twitterImg from "./assets/twitter.png"
import githubSocialImg from "./assets/github-b.png"
import loader from "./assets/loader.gif"

//Intro
const image = document.querySelector(".my-potrait");
const bioImg = document.querySelector(".bio-img");

//About
const pythonSkill = document.querySelector(".python-img");
const jsSkill = document.querySelector(".js-img");
const reactSkill = document.querySelector(".react-img");
const nodeSkill = document.querySelector(".node-img");
const flaskSkill = document.querySelector(".flask-img");
const mongoSkill = document.querySelector(".mongo-img");
const htmlSkill = document.querySelector(".html-img");
const cssSkill = document.querySelector(".css-img");
const expressSkill = document.querySelector(".express-img");
const sqlSkill = document.querySelector(".sql-img");
const apiSkill = document.querySelector(".api-img");
const gitSkill = document.querySelector(".git-img");
const webpackSkill = document.querySelector(".webpack-img");
const repoLink = document.querySelectorAll(".repo-img");
const liveLink = document.querySelectorAll(".live-img");

//Projects
const cartImage = document.querySelector(".cart-img");
const weatherImage = document.querySelector(".weather-img");
const todoImage = document.querySelector(".todo-img");
const cvImage = document.querySelector(".cv-img");
const keepImg = document.querySelector(".keep-img");
const moreLink = document.querySelector(".more-link");

//Footer
const linkedIn = document.querySelector(".linkedin");
const twitter= document.querySelector(".twitter");
const githubSocial = document.querySelector(".github-social");
//loader
const loaderGif = document.querySelector(".gif-loader");


const images = () => {
    //Projects
    cartImage.src=cart;
    weatherImage.src=weather;
    todoImage.src=todo;
    cvImage.src=cv;
    keepImg.src=keep;
    moreLink.src=livePrev;
    repoLink.forEach(link => {link.src=github});
    liveLink.forEach(link => {link.src=livePrev});

    //About
    image.src=myImage;
    bioImg.src=myImage;
    pythonSkill.src=python;
    jsSkill.src=javascript;
    reactSkill.src=react;
    nodeSkill.src=node;
    flaskSkill.src=flask;
    mongoSkill.src=mongo;
    htmlSkill.src=html;
    cssSkill.src=css;
    expressSkill.src=express;
    sqlSkill.src=sql;
    apiSkill.src=api;
    gitSkill.src=git;
    webpackSkill.src=webpack;

    //Footer
    linkedIn.src=linkedInImg;
    twitter.src=twitterImg;
    githubSocial.src=githubSocialImg;
    //Loader
    loaderGif.src=loader;
}
images();
