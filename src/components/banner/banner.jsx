// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
import
***********************************************************************************************/

import React, { PureComponent } from "react";
import { Icon, Button } from "react-native-elements";
import { Text, View, Image, StyleSheet, Platform } from "react-native";

import config from "../../config/configProvider";

// import logo and background image
const customLogo = require("../../CUSTOMIZATION/images/logo.png");
const defaultLogo = require("../../assets/images/defaultLogo.png");
const customBackground = require("../../CUSTOMIZATION/images/logoBackground.png");
const defaultBackground = require("../../assets/images/defaultLogoBackground.png");

let localStyle;

/***********************************************************************************************
component:
renders a banner with title, logo and navigational buttons
***********************************************************************************************/

class Banner extends PureComponent {
  /**
   * @constructor
   * @param  {object}    props
   * @param  {string}    props.title the title displayed
   * @param  {string}    props.subTitle the subtitle displayed
   * @param  {boolean}   props.noMenu if true no menu-button will be rendered in the top right corner
   * @param  {boolean}   props.isCheckIn true if the banner is used on the checkIn-screen
   * @param  {boolean}   props.noWayBack if true no 'back'-button will be rendered
   * @param  {boolean}   props.noRefresh if true no 'refesh'-button will be rendered
   * @param  {function}  props.updateUser triggers a user update
   * @param  {object}    props.nav the navigation object provided by 'react-navigation'
   */

  // rendering
  /*-----------------------------------------------------------------------------------*/

  render() {
    const {
      title,
      subTitle,
      isCheckIn,
      noMenu,
      updateUser,
      noWayBack,
      nav,
      noRefresh,
    } = this.props;

    /** holds the correct logo file */
    const logo = config.theme.ui.useCustomLogo ? customLogo : defaultLogo;

    /** holds the correct logoBackground file */
    const logoBackground = config.theme.ui.useCustomLogoBackground
      ? customBackground
      : defaultBackground;

    return (
      <View style={localStyle.banner}>
        <View style={localStyle.bannerUpperHalf}>
          <View style={localStyle.bannerTitleWrapper}>
            {/* if this is the checkIn-screen and reloads are not forbidden shows a reload button in the top left corner */}
            {isCheckIn && !noRefresh && (
              <Button
                type="clear"
                style={localStyle.bannerIcon}
                onPress={() => updateUser()}
                icon={
                  <Icon
                    size={config.appConfig.scaleUiFkt(28)}
                    name="refresh"
                    type="material-community"
                    color={config.theme.values.defaultBannerButtonColor}
                  />
                }
                accessibilityLabel={config.text.accessibility.refresh}
                accessibilityRole={config.text.accessibility.types.button}
                accessibilityHint={config.text.accessibility.refreshHint}
              />
            )}

            {/* If navigating back is allowed and there actually is a 'back' in the nav-stack shows the back-button in the top left corner.
                            There will be no back-button on the checkIn-screen as it is the first screen of the SignedInView defined in '../../navigation/appNavigator.js'  */}
            {!noWayBack && nav && (
              <Button
                type="clear"
                style={localStyle.bannerIcon}
                onPress={() => nav.goBack()}
                icon={
                  <Icon
                    size={config.appConfig.scaleUiFkt(28)}
                    name="arrow-left"
                    type="material-community"
                    color={config.theme.values.defaultBannerButtonColor}
                  />
                }
                accessibilityLabel={config.text.accessibility.back}
                accessibilityRole={config.text.accessibility.types.button}
                accessibilityHint={config.text.accessibility.backHint}
              />
            )}

            {/* Renders an empty icon if none of the other options came back positiv. */}
            {!(isCheckIn || (!noWayBack && nav)) ||
              (isCheckIn && noRefresh && (
                <View style={localStyle.bannerIcon} />
              ))}

            {/* The title string. */}
            {title !== "" && (
              <Text
                numberOfLines={1}
                style={localStyle.bannerTitle}
                accessibilityRole={config.text.accessibility.types.header}
              >
                {title}
              </Text>
            )}

            {/* Renders a menu button in the top right corner that navigates to the about-screen. */}
            {!noMenu && (
              <Button
                type="clear"
                style={localStyle.bannerIcon}
                onPress={() => nav.navigate("About")}
                icon={
                  <Icon
                    size={config.appConfig.scaleUiFkt(28)}
                    name="menu"
                    type="material-community"
                    color={config.theme.values.defaultBannerButtonColor}
                  />
                }
                accessibilityLabel={config.text.accessibility.menu}
                accessibilityRole={config.text.accessibility.types.button}
                accessibilityHint={config.text.accessibility.menuHint}
              />
            )}

            {/* Another empty icon in case there is no menu-button to be rendered. */}
            {noMenu && <View style={localStyle.bannerIcon} />}

            {/* Rendering the subtitle */}
            {subTitle !== "" && (
              <Text
                numberOfLines={1}
                style={localStyle.bannerSubtitle}
                accessibilityRole={config.text.accessibility.types.header}
              >
                {subTitle}
              </Text>
            )}
          </View>
        </View>

        {/* Renders the logo-background. */}
        {config.theme.ui.useBannerBackground && (
          <View style={localStyle.bannerFull}>
            <Image
              resizeMode="cover"
              style={localStyle.bannerBackgroundImage}
              source={logoBackground}
            />
          </View>
        )}

        {/* Renders the logo. */}

        <Image
          resizeMode="contain"
          style={localStyle.bannerImage}
          source={logo}
        />
      </View>
    );
  }
}

/***********************************************************************************************
local styling
***********************************************************************************************/

localStyle = StyleSheet.create({
  // Some values need to be calculated in the context of the plattform the app is running on
  // as well as the hight of the statusbar. 'Plattform' and 'getStatusBarHeight()' are used
  // to accomplish that. Additionally, scaleUiFkt() (located in src/config/appConfig.js)
  // will dynamically alter some sized based on the physical device-measurements.

  banner: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "stretch",
    paddingTop: Platform.OS === "ios" ? 30 : 0,
    backgroundColor: config.theme.values.defaultBannerBackgroundColor,
  },

  bannerUpperHalf: {
    zIndex: 2,
    width: "100%",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },

  bannerTitle: {
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    flex: 1,
    color: config.theme.values.defaultBannerTitleColor,
    ...config.theme.fonts.header2,
  },

  bannerSubtitle: {
    alignSelf: "center",
    textAlign: "center",
    marginBottom: config.appConfig.scaleUiFkt(5),
    marginTop: -config.appConfig.scaleUiFkt(15),
    width: "100%",
    color: config.theme.values.defaultBannerSubTitleColor,
    ...config.theme.fonts.subHeader1,
    position: "relative",
  },

  bannerIcon: {
    width: config.appConfig.scaleUiFkt(60),
    height: 44,
  },

  bannerTitleWrapper: {
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 15,
    marginRight: 15,
    flexWrap: "wrap",
  },

  bannerHalf: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  bannerImage: {
    position: "relative",
    alignSelf: "center",
    flex: 1,
    marginVertical: 5,
  },
});

/***********************************************************************************************
export
***********************************************************************************************/

export default Banner;
