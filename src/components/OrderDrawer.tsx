import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Utensils, Check, ArrowRight } from 'lucide-react';
import { OrderItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearOrder: () => void;
  onProceedToReserve: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
  onProceedToReserve,
}) => {
  const [orderSent, setOrderSent] = useState(false);
  const [tableNumber, setTableNumber] = useState('Table 7');

  if (!isOpen) return null;

  const subtotal = orderItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const estimatedTax = subtotal * 0.085;
  const total = subtotal + estimatedTax;

  const handleSendOrder = () => {
    setOrderSent(true);
  };

  const handleResetOrder = () => {
    setOrderSent(false);
    onClearOrder();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#E8E0D5]">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#E8E0D5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0F3327] text-[#D4AF37] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F3327]">Your Selected Dishes</h3>
              <span className="text-xs text-[#526059]">
                {orderItems.length} {orderItems.length === 1 ? 'dish' : 'dishes'} selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#526059] hover:text-[#0F3327] hover:bg-[#F4EFEB] transition-colors"
            aria-label="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {orderSent ? (
            /* Order Sent State */
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0F3327] text-[#D4AF37] flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0F3327]">
                Order Sent to Kitchen
              </h4>
              <p className="text-xs sm:text-sm text-[#526059] max-w-xs mx-auto leading-relaxed">
                Your selections have been noted for your dining experience. Our chef has begun preparing your courses.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E8E0D5] text-left text-xs space-y-1.5 max-w-xs mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#75827C]">Order Ref:</span>
                  <span className="font-mono font-bold text-[#0F3327]">
                    #VEL-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75827C]">Service:</span>
                  <span className="font-semibold text-[#1A2420]">{tableNumber} / Dine-In</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetOrder}
                  className="px-6 py-2.5 rounded-full bg-[#0F3327] text-white text-xs font-semibold hover:bg-[#164835]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : orderItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F4EFEB] text-[#75827C] flex items-center justify-center mx-auto">
                <Utensils className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0F3327]">No Dishes Selected</h4>
              <p className="text-xs text-[#526059] max-w-xs mx-auto">
                Explore our Starters, Main Courses and Desserts to curate your tasting order.
              </p>
            </div>
          ) : (
            /* Items List */
            <div className="space-y-3">
              {orderItems.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#E8E0D5] flex items-center gap-3 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-[#E8E0D5]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h5 className="font-serif text-sm font-bold text-[#1A2420] truncate">
                        {item.name}
                      </h5>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#75827C] hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-[#0F3327] font-semibold mt-0.5">
                      ${(item.price * quantity).toFixed(2)}
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-2 flex items-center gap-2.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-md bg-[#F4EFEB] hover:bg-[#E8E0D5] text-[#0F3327] flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#1A2420] min-w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-md bg-[#F4EFEB] hover:bg-[#E8E0D5] text-[#0F3327] flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculation & CTAs */}
        {!orderSent && orderItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-[#E8E0D5] space-y-4">
            <div className="space-y-1.5 text-xs text-[#526059]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1A2420]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8.5%)</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#F4EFEB] text-sm font-serif font-bold text-[#0F3327]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                id="send-order-button"
                onClick={handleSendOrder}
                className="w-full py-3.5 rounded-full bg-[#0F3327] hover:bg-[#164835] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Send Order to Table</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onProceedToReserve();
                }}
                className="w-full py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0F3327] border border-[#0F3327]/30 text-xs font-semibold transition-colors cursor-pointer"
              >
                Pre-order with Table Reservation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
