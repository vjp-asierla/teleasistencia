package com.example.teleappsistencia.ui.menu;

import androidx.fragment.app.Fragment;

public class MenuModel {

    private String menuName;
    private boolean hasChildren;
    private boolean isGroup;
    private Fragment fragment;

    public MenuModel(String menuName, boolean isGroup, boolean hasChildren, Fragment fragment) {

        this.menuName = menuName;
        this.isGroup = isGroup;
        this.hasChildren = hasChildren;
        this.fragment = fragment;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public boolean hasChildren() {
        return hasChildren;
    }

    public void setHasChildren(boolean hasChildren) {
        this.hasChildren = hasChildren;
    }

    public boolean isGroup() {
        return isGroup;
    }

    public void setIsGroup(boolean group) {
        isGroup = group;
    }

    public Fragment getFragment() {
        return fragment;
    }

    public void setFragment(Fragment fragment) {
        this.fragment = fragment;
    }
}
