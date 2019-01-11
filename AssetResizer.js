/* @flow */
'use strict';

import { NativeModules, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//const RNAssetResizer = requireNativeComponent('RNAssetResizer', RNAssetResizer);

const RNAssetResizer = NativeModules.RNAssetResizer;
export default RNAssetResizer
