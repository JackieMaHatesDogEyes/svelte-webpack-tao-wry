use tao::{
    event::{Event, StartCause, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};
use wry::WebViewBuilder;

// Include the HTML file at compile time (Thanks, Rust!)
static HTML: &str = include_str!("../../../dist/index.html");

fn main() -> wry::Result<()> {
    // Create a new event loop
    let event_loop = EventLoop::new();
    // Create a new window
    let window = WindowBuilder::new()
      .with_title("Svelte - Tao - Wry Example")
      .build(&event_loop)
      .unwrap();
    let _webview = WebViewBuilder::new(&window)
      .with_html(HTML)
      .build()?;
  
    event_loop.run(move |event, _, control_flow| {
      *control_flow = ControlFlow::Wait;
  
      match event {
        Event::NewEvents(StartCause::Init) => println!("Wry has started!"),
        Event::WindowEvent {
          event: WindowEvent::CloseRequested,
          ..
        } => *control_flow = ControlFlow::Exit,
        _ => (),
      }
    });
  }