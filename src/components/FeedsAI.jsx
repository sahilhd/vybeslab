import { useState, useRef, useEffect } from 'react';
import { mockProductDatabase } from '../mockProductData';

const FeedsAI = ({ isOpen, onClose, currentStreamId }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hey there! 👋 I\'m Feeds AI - your personal shopping assistant. Ask me about any product you saw in the streams!',
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
    
    // Check if it's a product price inquiry
    if (query.includes('price') || query.includes('cost') || query.includes('much') || query.includes('$')) {
      const product = simulateProductSearch(query);
      
      if (product) {
        return {
          type: 'product',
          content: `I found that product! Here's what I saw in the stream:`,
          product: product,
          confidence: 95
        };
      } else {
        return {
          type: 'text',
          content: 'I couldn\'t find that specific product in the current streams. Try asking about glasses, jackets, or golf equipment - I saw those recently! 🔍'
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
        confidence: 88
      };
    }
    
    // Default responses
    const responses = [
      'I can help you find products from any stream! Try asking "What was the price of those glasses?" or "How much was that jacket?"',
      'I\'m analyzing the streams for product information. Ask me about specific items you saw!',
      'My AI vision is always watching the streams for cool products. What caught your eye? 👁️',
      'I can recall any product from the streams with prices and details. Just describe what you saw!'
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
              <span className="text-black font-mono font-bold text-lg">AI</span>
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
                              📺 Seen in: {message.product.streamAppearance}
                            </p>
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
            {['Price of glasses?', 'Show me jackets', 'Golf equipment cost?'].map((suggestion) => (
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