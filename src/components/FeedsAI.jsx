import { useState, useRef, useEffect } from 'react';
import { mockProductDatabase } from '../mockProductData';

const FeedsAI = ({ isOpen, onClose, currentStreamId }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hey there! 👋 I\'m Feeds AI - your personal shopping assistant. Ask me about any product you saw in the feeds!',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateProductSearch = (query) => {
    // Simulate AI understanding and finding products
    const keywords = query.toLowerCase().split(' ');
    
    // Find products that match keywords
    const foundProducts = mockProductDatabase.filter(product => 
      keywords.some(keyword => 
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.tags.some(tag => tag.toLowerCase().includes(keyword))
      )
    );

    return foundProducts.length > 0 ? foundProducts[0] : null;
  };

  const generateAIResponse = (userMessage) => {
    const query = userMessage.toLowerCase();
    
    // Handle specific denim jacket query
    if (query.includes('feed') && query.includes('visvim') && query.includes('carmel') && 
        (query.includes('denim') || query.includes('jacket')) && query.includes('visvim motors')) {
      const denimJacket = mockProductDatabase.find(p => p.name.includes('COVERALL JKT'));
      
      if (denimJacket) {
        return {
          type: 'product',
          content: `Perfect! I found this from my analysis of your "Shopping at Visvim in Carmel" feed:`,
          product: denimJacket,
          confidence: 98,
          streamSpecific: true
        };
      }
    }
    
    // Handle general visvim/carmel queries  
    if (query.includes('visvim') && query.includes('carmel')) {
      const product = simulateProductSearch(query);
      
      if (product && product.streamAppearance.includes('Visvim in Carmel')) {
        return {
          type: 'product',
          content: `Based on my analysis of your "Shopping at Visvim in Carmel" feed, I found this item:`,
          product: product,
          confidence: product.confidence,
          streamSpecific: true
        };
      }
    }
    
    // Check if it's a product price inquiry
    if (query.includes('price') || query.includes('cost') || query.includes('much') || query.includes('$')) {
      const product = simulateProductSearch(query);
      
      if (product) {
        // More detailed response based on stream data
        const streamContext = product.streamTimestamp 
          ? `at timestamp ${product.streamTimestamp}` 
          : 'during the stream';
        
        return {
          type: 'product',
          content: `Perfect! I found this from my stream data analysis. This item appeared ${streamContext}:`,
          product: product,
          confidence: product.confidence,
          streamSpecific: true
        };
      } else {
        return {
          type: 'text',
          content: 'I couldn\'t find that specific product in the current streams. Try asking about glasses, shirts, jackets, or golf equipment - I saw those recently! 🔍'
        };
      }
    }
    
    // General product questions
    if (query.includes('what') && (query.includes('wearing') || query.includes('using') || query.includes('showed'))) {
      const product = mockProductDatabase[Math.floor(Math.random() * mockProductDatabase.length)];
      return {
        type: 'product',
        content: 'I spotted this item in the stream:',
        product: product,
        confidence: product.confidence || 88
      };
    }
    
    // Stream-specific questions
    if (query.includes('stream') || query.includes('video') || query.includes('watch') || query.includes('feed')) {
      return {
        type: 'text',
        content: 'I\'ve analyzed all your recent feeds! Ask me about specific products like "During my feed at Visvim Carmel, how much was the denim jacket that had Visvim Motors on it?" and I\'ll pull up the exact details! 📺'
      };
    }
    
    // Default responses
    const responses = [
      'I can help you find products from any stream! Try asking "During my visit to [stream name], how much was [product]?"',
      'I\'m analyzing your stream data for product information. Ask me about specific items you featured!',
      'My AI vision has cataloged products from all your streams. What specific item are you looking for? 👁️',
      'I can recall any product from your streams with prices and details. Try mentioning the specific stream and product!'
    ];
    
    return {
      type: 'text',
      content: responses[Math.floor(Math.random() * responses.length)]
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        ...aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-cyber-black border-2 border-neon-cyan rounded-lg w-full max-w-lg h-[600px] flex flex-col overflow-hidden shadow-2xl shadow-neon-cyan/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border-b border-neon-cyan/50 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neon-cyan rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                {/* Glow Effect */}
                <circle cx="12" cy="12" r="11" fill="url(#glow)" opacity="0.6"/>
                {/* Main Circle with Gradient */}
                <circle cx="12" cy="12" r="10" fill="url(#mainGradient)"/>
                {/* Four-pointed Star/Diamond */}
                <path d="M12 4L14 10L20 12L14 14L12 20L10 14L4 12L10 10L12 4Z" fill="black"/>
                {/* Notification Dot */}
                <circle cx="18" cy="6" r="2" fill="#00ff00"/>
                {/* Gradients */}
                <defs>
                  <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4facfe"/>
                    <stop offset="100%" stopColor="#00f2fe"/>
                  </linearGradient>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4facfe" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#4facfe" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h3 className="font-pixel text-neon-cyan text-lg">FEEDS AI</h3>
              <p className="text-gray-400 text-xs font-mono">Product Recognition Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-neon-magenta text-black' : 'bg-gray-800 text-white'} rounded-lg p-3`}>
                {message.type === 'product' ? (
                  <div className="space-y-3">
                    <p className="font-mono text-sm">{message.content}</p>
                    
                    {/* Product Card */}
                    <div className="bg-cyber-black border border-neon-green rounded-lg p-3 space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                        <span className="text-neon-green font-mono text-xs">{message.confidence}% MATCH</span>
                      </div>
                      
                      <img 
                        src={message.product.image} 
                        alt={message.product.name}
                        className="w-full h-32 object-cover rounded border border-neon-blue/50"
                      />
                      
                      <div>
                        <h4 className="text-neon-cyan font-mono font-bold text-sm">{message.product.name}</h4>
                        <p className="text-gray-400 text-xs mb-2">{message.product.brand}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-neon-green font-mono font-bold text-lg">{message.product.price}</span>
                          <span className="text-gray-500 text-xs">{message.product.category}</span>
                        </div>
                        
                        {message.product.streamAppearance && (
                          <div className="mt-2 pt-2 border-t border-gray-700">
                            <p className="text-gray-400 text-xs">
                              📺 Stream: {message.product.streamAppearance}
                            </p>
                            {message.product.streamTimestamp && (
                              <p className="text-neon-green text-xs mt-1">
                                ⏱️ Timestamp: {message.product.streamTimestamp}
                              </p>
                            )}
                            {message.product.streamContext && (
                              <p className="text-gray-500 text-xs mt-1">
                                💡 {message.product.streamContext}
                              </p>
                            )}
                          </div>
                        )}
                        
                        {message.product.buyLink && (
                          <div className="mt-3">
                            <a
                              href={message.product.buyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gradient-to-r from-neon-green to-emerald-600 text-black font-mono font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-200 shadow-lg shadow-neon-green/30 flex items-center justify-center space-x-2"
                            >
                              <span>🛒</span>
                              <span>BUY NOW</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="font-mono text-sm">{message.content}</p>
                )}
                
                <div className="mt-2">
                  <span className="text-xs opacity-60">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-neon-cyan/50 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about products from the streams..."
              className="flex-1 bg-gray-800 border border-neon-blue text-white px-3 py-2 rounded font-mono text-sm placeholder-gray-400 focus:outline-none focus:border-neon-cyan"
            />
            <button
              onClick={handleSendMessage}
              className="bg-neon-cyan text-black px-4 py-2 rounded font-mono text-sm hover:bg-neon-cyan/80 transition-colors"
            >
              SEND
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-2 flex flex-wrap gap-1">
            {[
              'During my feed at Visvim Carmel, how much was the denim jacket that had Visvim Motors on it?', 
              'Price of glasses?', 
              'Show me jackets'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputValue(suggestion)}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded hover:bg-gray-600 transition-colors font-mono"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsAI; 