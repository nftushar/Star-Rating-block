<?php
class BDBBlockPath{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'bBlocksPath-style', plugins_url( 'dist/style.css', __DIR__ ), [], B_BLOCKS_VERSION); // Style
		wp_register_style( 'bBlocksPath-editor-style', plugins_url( 'dist/editor.css', __DIR__ ), [ 'bBlocksPath-style' ], B_BLOCKS_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bBlocksPath-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bBlocksPath-editor-script', 'text-path', plugin_dir_path( __DIR__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('bBlocksPath-style');
        wp_enqueue_script( 'bBlocksPath-script', plugins_url( 'dist/script.js', __DIR__ ), [ 'react', 'react-dom' ], B_BLOCKS_VERSION, true );

		$className = $className ?? '';
		$blockClassName = "bBlocksPath $className";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bBlocksPath-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockPath();