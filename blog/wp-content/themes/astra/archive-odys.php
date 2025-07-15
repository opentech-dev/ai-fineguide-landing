<?php
/**
 * The template for displaying archive pages with Odys-inspired layout
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Astra
 * @since 1.0.0
 */

get_header(); ?>

<div id="primary" <?php astra_primary_class(); ?>>

    <?php astra_primary_content_top(); ?>

    <main id="main" class="site-main">
        <div class="ast-container">
            <?php get_template_part('template-parts/archive-blog-odys'); ?>
        </div>
    </main><!-- #main -->

    <?php astra_primary_content_bottom(); ?>

</div><!-- #primary -->

<?php get_footer(); ?>
