<?php
/**
 * Template part for displaying the blog archive in Odys-inspired layout
 *
 * @package Astra
 * @since 1.0.0
 */

// Get all categories
$categories = get_categories(array(
    'orderby' => 'name',
    'order'   => 'ASC'
));

// Get current category
$current_category = get_queried_object();
$current_cat_id = isset($current_category->term_id) ? $current_category->term_id : 0;
?>

<div class="odys-blog-container">
    <div class="blog-header-wrapper">
        <div class="blog-header">
            <h1 class="blog-title"><?php echo esc_html__('Blog', 'astra'); ?></h1>
            <p class="blog-subtitle"><?php echo esc_html__('Latest insights, news, and updates', 'astra'); ?></p>
        </div>
    </div>

    <div class="blog-categories-wrapper">
        <div class="blog-categories">
            <?php foreach ($categories as $category) : ?>
                <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" <?php echo ($current_cat_id === $category->term_id) ? 'class="active"' : ''; ?>>
                    <?php echo esc_html($category->name); ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>

<div class="main-content-wrapper">
    <!-- Main Content Column -->
    <div class="content-column">

<?php
// Featured post query - get the most recent post
$featured_args = array(
    'posts_per_page' => 1,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
);

// If on a category page, get the featured post from that category
if (is_category()) {
    $featured_args['cat'] = $current_cat_id;
}

$featured_query = new WP_Query($featured_args);

if ($featured_query->have_posts()) :
    while ($featured_query->have_posts()) : $featured_query->the_post();
        // Get the post category
        $categories = get_the_category();
        $category_name = !empty($categories) ? esc_html($categories[0]->name) : '';
        $category_link = !empty($categories) ? esc_url(get_category_link($categories[0]->term_id)) : '';
?>
        <div class="featured-post-section">
            <article class="featured-post">
                <div class="featured-post-image">
                    <?php
                    if (has_post_thumbnail()) {
                        the_post_thumbnail('large');
                    } else {
                        // Default featured image
                        echo '<img src="' . esc_url(get_template_directory_uri() . '/assets/images/fineguide/default-post.jpg') . '" alt="' . esc_attr(get_the_title()) . '" class="default-featured-img" />';
                    }
                    ?>
                </div>
                <div class="featured-post-content">
                    <div class="featured-post-meta">
                        <?php if (!empty($category_name)) : ?>
                            <a href="<?php echo $category_link; ?>" class="featured-post-category"><?php echo $category_name; ?></a>
                        <?php endif; ?>
                        <span class="featured-post-date"><?php echo get_the_date(); ?></span>
                    </div>
                    <h2 class="featured-post-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <div class="featured-post-excerpt">
                        <?php echo wp_trim_words(get_the_excerpt(), 25, '...'); ?>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="featured-post-link"><?php echo esc_html__('Read More', 'astra'); ?></a>
                </div>
            </article>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
endif;

// Main posts query - exclude the featured post
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$main_args = array(
    'posts_per_page' => 6,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'paged'          => $paged,
);

// If on a category page, get posts from that category
if (is_category()) {
    $main_args['cat'] = $current_cat_id;
}

// If we have a featured post, exclude it from the main query
if ($featured_query->have_posts() && !is_paged()) {
    $featured_id = $featured_query->posts[0]->ID;
    $main_args['post__not_in'] = array($featured_id);
}

$main_query = new WP_Query($main_args);

if ($main_query->have_posts()) : ?>
        
        <!-- Explore Topics Section -->
        <div class="category-highlights-section">
            <h2 class="category-highlights-title"><?php echo esc_html__('Explore Topics', 'astra'); ?></h2>
            <div class="category-highlights">
                <?php 
                // Get top 3 categories with the most posts
                $top_categories = get_categories(array(
                    'orderby' => 'count',
                    'order'   => 'DESC',
                    'number'  => 3
                ));
                
                foreach ($top_categories as $category) :
                    // Get the latest post in this category
                    $latest_post = get_posts(array(
                        'posts_per_page' => 1,
                        'category'      => $category->term_id
                    ));
                    
                    if (!empty($latest_post)) :
                        $post = $latest_post[0];
                        setup_postdata($post);
                ?>
                        <div class="category-highlight-card">
                            <div class="category-highlight-image">
                                <?php 
                                if (has_post_thumbnail()) {
                                    the_post_thumbnail('medium');
                                } else {
                                    // Default featured image
                                    echo '<img src="' . esc_url(get_template_directory_uri() . '/assets/images/fineguide/default-post.jpg') . '" alt="' . esc_attr($category->name) . '" class="default-featured-img" />';
                                }
                                ?>
                            </div>
                            <div class="category-highlight-content">
                                <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" class="category-highlight-category">
                                    <?php echo esc_html($category->name); ?>
                                    <span class="category-count">(<?php echo esc_html($category->count); ?>)</span>
                                </a>
                                <h3 class="category-highlight-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                            </div>
                        </div>
                <?php 
                        wp_reset_postdata();
                    endif;
                endforeach; 
                ?>
            </div>
        </div>
        
    <div class="blog-grid-section">
        <h2 class="blog-grid-title"><?php echo esc_html__('Latest Articles', 'astra'); ?></h2>
    </div>
    <div class="blog-grid">
        <?php
        while ($main_query->have_posts()) : $main_query->the_post();
            // Get the post category
            $categories = get_the_category();
            $category_name = !empty($categories) ? esc_html($categories[0]->name) : '';
            $category_link = !empty($categories) ? esc_url(get_category_link($categories[0]->term_id)) : '';
        ?>
            <article class="blog-card">
                <div class="blog-card-image">
                    <?php
                    if (has_post_thumbnail()) {
                        the_post_thumbnail('medium_large');
                    } else {
                        // Default featured image
                        echo '<img src="' . esc_url(get_template_directory_uri() . '/assets/images/fineguide/default-post.jpg') . '" alt="' . esc_attr(get_the_title()) . '" class="default-featured-img" />';
                    }
                    ?>
                </div>
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <?php if (!empty($category_name)) : ?>
                            <a href="<?php echo $category_link; ?>" class="blog-card-category"><?php echo $category_name; ?></a>
                        <?php endif; ?>
                        <span class="blog-card-date"><?php echo get_the_date(); ?></span>
                    </div>
                    <h3 class="blog-card-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                    <div class="blog-card-excerpt">
                        <?php echo wp_trim_words(get_the_excerpt(), 15, '...'); ?>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="blog-card-link"><?php echo esc_html__('Read More', 'astra'); ?></a>
                </div>
            </article>
        <?php endwhile; ?>
    </div>

    <div class="blog-pagination">
        <?php
        echo paginate_links(array(
            'base'         => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
            'total'        => $main_query->max_num_pages,
            'current'      => max(1, get_query_var('paged')),
            'format'       => '?paged=%#%',
            'show_all'     => false,
            'type'         => 'plain',
            'end_size'     => 2,
            'mid_size'     => 1,
            'prev_next'    => true,
            'prev_text'    => '←',
            'next_text'    => '→',
            'add_args'     => false,
            'add_fragment' => '',
            'before_page_number' => '',
            'after_page_number'  => '',
            'class'        => 'blog-pagination',
        ));
        ?>
    </div>
<?php
else :
?>
    <div class="ast-no-results">
        <h2 class="page-title"><?php echo esc_html__('Nothing Found', 'astra'); ?></h2>
        <div class="page-content">
            <p><?php echo esc_html__('It seems we can&rsquo;t find what you&rsquo;re looking for.', 'astra'); ?></p>
        </div>
    </div>
<?php
endif;
wp_reset_postdata();
?>
    </div><!-- End .content-column -->
</div><!-- End .main-content-wrapper -->
</div><!-- End .odys-blog-container -->
