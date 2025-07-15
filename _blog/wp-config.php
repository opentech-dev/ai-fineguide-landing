<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress_password' );

/** Database hostname */
define( 'DB_HOST', '136.243.57.185:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|?y)5-,XwNDo4E/OUFebtCW_MfBnMgs/rSmFq&l;iEV=;o<W1-T8|ckQ*SMj/D! ' );
define( 'SECURE_AUTH_KEY',  'oto73n)1JU7V}K/qgRyw$rz>U{qD5(/>QPtI)Kme[ub/uF]tvuw2;{1JG=|^wnNP' );
define( 'LOGGED_IN_KEY',    '+OI,Y:LZb7JR+_vGBO/nFf.M#G~a_xA/N|u;8PDfR~[fb>x<,_^.7+|Vf0$7-%pu' );
define( 'NONCE_KEY',        'G4wr-+.G}E]<yg`zSHY;%$:a|-}i$i` x&;PdUxJ_I?A ztcK=-]!V|wE@^lR#mT' );
define( 'AUTH_SALT',        'q<xrpqrAviLg:/SD {yx9apkE5-=J=bleHU8v];bVa)p)j/y{xdiCu^u4cStdc|x' );
define( 'SECURE_AUTH_SALT', 'l&{u_61>Y#0;G~:ThuL!Jlew4i;LFFboNdo ?)(8%TB!QrC]|U2V6qIBC4BS5^u+' );
define( 'LOGGED_IN_SALT',   'BG@(ZkcxW3|r:k91u2w>`>E8CY!tEY;;:7JcCEMEneh$GK.hG+~Wi#%GK#%0y8/e' );
define( 'NONCE_SALT',       'bTu3=:m8Qgdg6EX^o<6o+&,jtMG`hgC/f1QQUReE&hd5E_WM[06S77fc~v6/GQxa' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
