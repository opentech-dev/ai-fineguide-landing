<?php
/**
 * The template for displaying the blog home page with Odys-inspired layout
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Astra
 * @since 1.0.0
 */

get_header(); ?>

<div id="primary" class="content-area odys-blog-layout">

    <?php astra_primary_content_top(); ?>

    <main id="main" class="site-main">
        <?php get_template_part('template-parts/archive-blog-odys'); ?>
    </main><!-- #main -->

    <?php astra_primary_content_bottom(); ?>

</div><!-- #primary -->

<?php get_footer(); ?>
