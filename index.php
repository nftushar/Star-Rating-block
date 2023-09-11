<?php
/**
 * Plugin Name:Product Review Block
 * Description: productReviewBlock Gutenberg plugin: Streamline Gutenberg editing with easy-to-use, responsive productReviewBlock  and more..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: product-review
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }
 
// Constant
define( 'B_BLOCKS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.7.8' );
define( 'B_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );

require_once plugin_dir_path( __FILE__ ) . 'inc/block.php';