'use client';
import { motion } from 'framer-motion';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface TreeProps {
  nodes: TreeNode[];
}

export function Tree({ nodes }: TreeProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <h3 className="text-xl font-semibold dark:text-white">{node.label}</h3>
          </div>
          {node.children && (
            <div className="ml-8 mt-4 space-y-4 border-l-2 border-gray-200 pl-6">
              {node.children.map((child) => (
                <motion.div
                  key={child.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{child.label}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
} 