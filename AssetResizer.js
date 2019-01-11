/* @flow */
'use strict';

import { requireNativeComponent, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//const RNAssetResizer = requireNativeComponent('RNAssetResizer', RNAssetResizer);

const compressImg = NativeModules.RNAssetResizer;

export default RNAssetResizer
