<?php
class BDBBlockDirectory{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'b-blocks-product-review-style', plugins_url( 'dist/style.css', __DIR__ ), [], B_BLOCKS_VERSION); // Style
		wp_register_style( 'b-blocks-product-review-editor-style', plugins_url( 'dist/editor.css', __DIR__ ), [ 'b-blocks-product-review-style' ], B_BLOCKS_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'b-blocks-product-review-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'b-blocks-product-review-editor-script', 'product-review', plugin_dir_path( __DIR__ ) . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('b-blocks-product-review-style');
        wp_enqueue_script( 'b-blocks-product-review-script', plugins_url( 'dist/script.js', __DIR__ ), [ 'react', 'react-dom' ], B_BLOCKS_VERSION, true );
		wp_set_script_translations( 'b-blocks-product-review-script', 'product-review', plugin_dir_path( __DIR__ ) . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-b-blocks-product-review $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bBlocksProductReview-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockDirectory();