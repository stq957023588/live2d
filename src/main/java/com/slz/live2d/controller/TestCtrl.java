package com.slz.live2d.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @ClassName TestCtrl
 * @Description: TODO
 * @Author 95702
 * @Date 2019/12/8
 * @Version V1.0
 **/
@RestController
public class TestCtrl {
    @RequestMapping("/index")
    public ModelAndView index(){

        return new ModelAndView("index.html");
    }
}
